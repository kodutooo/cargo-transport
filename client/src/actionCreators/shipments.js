const socket = window.io();

export function addShipment(data) {
  return () => {
    socket.emit('new shipment', JSON.stringify(data));
  };
};