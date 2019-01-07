const socketIo = require('socket.io');

function attachSocket(server) {
  const io = socketIo(server);
  io.on('connection', socket => {
    socket.on('new shipment', shipment => console.log(shipment));
  });
};

module.exports = { attachSocket };