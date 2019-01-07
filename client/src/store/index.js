import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import shipments from '../reducers/shipments';

const store = createStore(
  shipments,
  compose(applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  
);

export default store;