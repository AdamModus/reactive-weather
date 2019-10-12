import { ILocationState } from './state/types/location.types';
import { ITemperatureUnitState } from './state/types/temperature.types';

export const ActionTypes = {
  GET_BROWSER_LOCATION_SUCCESS: 'GET_BROWSER_LOCATION_SUCCESS',
  GET_BROWSER_LOCATION_FAILED: 'GET_BROWSER_LOCATION_FAILED',
  UPDATE_CITY_AND_COUNTRY_SUCCESS: 'UPDATE_CITY_AND_COUNTRY_SUCCESS',
  UPDATE_CITY_AND_COUNTRY_FAILURE: 'UPDATE_CITY_AND_COUNTRY_FAILURE',
  UPDATE_TEMPERATURE_UNIT: 'UPDATE_TEMPERATURE_UNIT',
  UPDATE_FORECAST_SUCCESS: 'UPDATE_FORECAST_SUCCESS',
  UPDATE_FORECAST_FAILURE: 'UPDATE_FORECAST_FAILURE'
};

interface getBrowserLocationSuccess {
  type: typeof ActionTypes.GET_BROWSER_LOCATION_SUCCESS;
  payload: ILocationState;
}

interface getBrowserLocationFailed {
  type: typeof ActionTypes.GET_BROWSER_LOCATION_FAILED;
  payload: ILocationState;
}

interface updateLocation {
  type: typeof ActionTypes.UPDATE_CITY_AND_COUNTRY_SUCCESS;
  payload: ILocationState;
}

interface updateTemperatureUnit {
  type: typeof ActionTypes.UPDATE_TEMPERATURE_UNIT;
  payload: ITemperatureUnitState;
}

interface updateForecastSuccess {
  type: typeof ActionTypes.UPDATE_FORECAST_SUCCESS;
  payload: any;
}

interface updateForecastFailure {
  type: typeof ActionTypes.UPDATE_FORECAST_FAILURE;
  payload: any;
}

export type LocationActionTypes =
  | getBrowserLocationSuccess
  | getBrowserLocationFailed
  | updateLocation;

export type TemperatureActionTypes = updateTemperatureUnit;

export type ForecastActionTypes = updateForecastSuccess | updateForecastFailure;
