import { ILocationState } from './state/types/location.types';
import { ITemperatureUnitState } from './state/types/temperature-unit.types';

export const ActionTypes = {
  GET_BROWSER_LOCATION_SUCCESS: 'GET_BROWSER_LOCATION_SUCCESS',
  GET_BROWSER_LOCATION_FAILED: 'GET_BROWSER_LOCATION_FAILED',
  UPDATE_LOCATION: 'UPDATE_LOCATION',
  UPDATE_TEMPERATURE_UNIT: 'UPDATE_TEMPERATURE_UNIT'
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
  type: typeof ActionTypes.UPDATE_LOCATION;
  payload: ILocationState;
}

interface updateTemperatureUnit {
  type: typeof ActionTypes.UPDATE_TEMPERATURE_UNIT;
  payload: ITemperatureUnitState;
}

export type LocationActionTypes =
  | getBrowserLocationSuccess
  | getBrowserLocationFailed
  | updateLocation;

export type TemperatureActionTypes = updateTemperatureUnit;
