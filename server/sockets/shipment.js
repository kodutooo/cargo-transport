const socketIo = require('socket.io');
const Shipment = require('../models/shipment');

function attachSocket(server) {
  const io = socketIo(server);
  io.on('connection', socket => {
    handleNewConnection(socket);
    socket.on('new shipment', shipment =>{
      handleNewShipment(shipment, socket, io);
    });
  });
};

function handleNewConnection(socket) {
  Shipment.find((err, docs) => {
    if (err) {
      return console.error(err);
    }
    socket.emit('list of shipments', docs);
  })
}

function handleNewShipment(shipment, socket, io) {
  const newShipment = new Shipment(shipment);
  newShipment.save(err => {
    if (err) {
      return handleError(err, socket);
    }
    io.emit('new shipment', newShipment.toObject());
  });
};

function handleError(err, socket){
  socket.emit('error', err);
}

module.exports = { attachSocket };