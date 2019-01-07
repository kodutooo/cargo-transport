import { NEW_SHIPMENT, INITIAL_SHIPMENTS } from '../actionTypes/shipments';

const defaultStore = {
  listOfShipments: []
};

function shipments(store = defaultStore, action) {
  switch(action.type) {
    case INITIAL_SHIPMENTS:
      return {...store, listOfShipments: action.payload};
    default :
      return store;
  }
}

export default shipments;