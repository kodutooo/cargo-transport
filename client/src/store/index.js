import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as toastrReducer } from 'react-redux-toastr';
import shipments from '../reducers/shipments';

const reducers = {
  shipments,
  toastr: toastrReducer
}

const rootReducer = combineReducers(reducers);

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;