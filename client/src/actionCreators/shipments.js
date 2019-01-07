import store from '../store';
import { INITIAL_SHIPMENTS, EDIT_SHIPMENT } from '../actionTypes/shipments';
const { dispatch } = store;

const socket = window.io();
socket.on('list of shipments', data => {
  dispatch(setInitialShipments(data));
});
socket.on('edit shipment', data => {
  dispatch(editExistingShipment(data));
});

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

export function sendShipmentChanges(data) {
  return () => {
    socket.emit('edit shipment', data);
  }
}

function editExistingShipment(data) {
  return {
    type: EDIT_SHIPMENT,
    payload: data
  }
}

export function deleteExistingShipment(id) {}