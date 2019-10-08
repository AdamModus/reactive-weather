import { combineReducers } from 'redux';
import { ILocationState } from '../types/location.types';
import { ITemperatureUnitState } from '../types/temperature-unit.types';
import LocationReducer from './location.reducers';
import TemperatureUnitReducer from './temperature-unit.reducers';

export interface IStoreState {
  location: ILocationState;
  temperatureUnit: ITemperatureUnitState;
}

export default combineReducers({
  location: LocationReducer,
  temperatureUnit: TemperatureUnitReducer
});
