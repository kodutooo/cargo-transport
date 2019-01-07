import { NEW_SHIPMENT, INITIAL_SHIPMENTS, EDIT_SHIPMENT, DELETE_SHIPMENT } from '../actionTypes/shipments';

const defaultState = {
  listOfShipments: []
};

function shipments(state = defaultState, action) {
  switch(action.type) {
    case INITIAL_SHIPMENTS:
      return {...state, listOfShipments: action.payload};
    case NEW_SHIPMENT: {
      const stateCopy = {...state, listOfShipments: [...state.listOfShipments]};
      stateCopy.listOfShipments.push(action.payload);
      return stateCopy;
    }
    case EDIT_SHIPMENT: {
      const stateCopy = {...state, listOfShipments: [...state.listOfShipments]};
      const shipment = stateCopy.listOfShipments.find(item => item._id === action.payload._id);
      const { status, from, to, shippedOn } = action.payload;
      shipment.status = status;
      shipment.from = from;
      shipment.to = to;
      shipment.shippedOn = shippedOn;
      return stateCopy;
    }
    case DELETE_SHIPMENT: {
      const stateCopy = {...state, listOfShipments: [...state.listOfShipments]};
      let itemIndex = null;
      stateCopy.listOfShipments.find((item, index) => {
        if (item._id === action.payload.id) {
          itemIndex = index;
          return true;
        }
      });
      stateCopy.listOfShipments.splice(itemIndex, 1);
      return stateCopy;
    }
    default :
      return state;
  }
}

export default shipments;