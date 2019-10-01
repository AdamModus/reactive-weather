import { combineReducers } from 'redux';
import LocationReducer from './location.reducers';

export default combineReducers({
  location: LocationReducer
});
