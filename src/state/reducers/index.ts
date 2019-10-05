import { combineReducers } from 'redux';
import { ILocationState } from '../types/location.types';
import LocationReducer from './location.reducers';

export interface StoreState {
  location: ILocationState;
}

export default combineReducers({
  location: LocationReducer
});
