const socketIo = require('socket.io');
const Shipment = require('../models/shipment');

function attachSocket(server) {
  const io = socketIo(server);
  io.on('connection', socket => {
    handleNewConnection(socket);
    socket.on('new shipment', shipment =>{
      handleNewShipment(shipment, socket, io);
    });
    socket.on('edit shipment', shipment =>{
      handleShipmentEdit(shipment, socket, io);
    });
    socket.on('delete shipment', id =>{
      handleShipmentDelete(id, socket, io);
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
  socket.emit('validation error', err);
}

function handleShipmentEdit(data, socket, io) {
  Shipment.findById(data.id, (err, shipment) => {
    if (err) {
      return handleError(err, socket);
    };
    const { status, from, to, shippedOn } = data;
    shipment.status = status;
    shipment.from = from;
    shipment.to = to;
    shipment.shippedOn = shippedOn;
    shipment.save((err, updatedShipment) => {
      if (err) {
        return handleError(err, socket);
      };
      io.emit('edit shipment', updatedShipment.toObject());
    })
  })
}

function handleShipmentDelete(id, socket, io) {
  Shipment.findByIdAndDelete(id, err => {
    if (err) {
      return handleError(err, socket);
    };
    io.emit('delete shipment', id);
  })
}

module.exports = { attachSocket };