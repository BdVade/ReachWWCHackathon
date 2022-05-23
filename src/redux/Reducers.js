import { combineReducers } from 'redux';
import { connectReducer } from './reducers/Connect';

export default combineReducers({
  connect: connectReducer,
});
