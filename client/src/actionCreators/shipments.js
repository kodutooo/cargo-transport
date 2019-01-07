import store from '../store';
import { INITIAL_SHIPMENTS, EDIT_SHIPMENT, DELETE_SHIPMENT } from '../actionTypes/shipments';
const { dispatch } = store;

const socket = window.io();
socket.on('list of shipments', data => {
  dispatch(setInitialShipments(data));
});
socket.on('edit shipment', data => {
  dispatch(editExistingShipment(data));
});
socket.on('delete shipment', id => {
  dispatch(deleteExistingShipment(id));
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

export function sendDeleteInfo(id) {
  return () => {
    socket.emit('delete shipment', id);
  }
}

function editExistingShipment(data) {
  return {
    type: EDIT_SHIPMENT,
    payload: data
  };
};

function deleteExistingShipment(id) {
  return {
    type: DELETE_SHIPMENT,
    payload: {id}
  };
};