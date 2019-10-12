import { combineReducers } from 'redux';
import { IForecastState } from '../types/forecast.types';
import { ILocationState } from '../types/location.types';
import { ITemperatureUnitState } from '../types/temperature.types';
import ForecastReducer from './forecast.reducers';
import LocationReducer from './location.reducers';
import TemperatureUnitReducer from './temperature.reducers';

export interface IStoreState {
  location: ILocationState;
  temperatureUnit: ITemperatureUnitState;
  forecast: IForecastState;
}

export default combineReducers({
  location: LocationReducer,
  temperatureUnit: TemperatureUnitReducer,
  forecast: ForecastReducer
});
