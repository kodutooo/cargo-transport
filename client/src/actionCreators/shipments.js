const socket = window.io();

export function sendNewShipment(data) {
  return () => {
    socket.emit('new shipment', JSON.stringify(data));
  };
};