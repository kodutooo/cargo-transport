import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import shipments from '../reducers/shipments';

const store = createStore(
  shipments,
  applyMiddleware(thunk)
);

export default store;