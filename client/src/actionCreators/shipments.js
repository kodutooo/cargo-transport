import store from '../store';
import { INITIAL_SHIPMENTS } from '../actionTypes/shipments';
const { dispatch } = store;

const socket = window.io();
socket.on('list of shipments', data => {
  dispatch(setInitialShipments(data));
})

function setInitialShipments(data) {
  return {
    type: INITIAL_SHIPMENTS,
    payload: data
  };
};

export function sendNewShipment(data) {
  return () => {
    socket.emit('new shipment', data);
  };
};