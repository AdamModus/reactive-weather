import { Location } from './state/types/location.types';

export const ActionTypes = {
  GET_BROWSER_LOCATION_SUCCESS: 'GET_BROWSER_LOCATION_SUCCESS',
  GET_BROWSER_LOCATION_FAILED: 'GET_BROWSER_LOCATION_FAILED',
  UPDATE_LOCATION: 'UPDATE_LOCATION'
};

interface getBrowserLocationSuccess {
  type: typeof ActionTypes.GET_BROWSER_LOCATION_SUCCESS;
  payload: Location;
}

interface getBrowserLocationFailed {
  type: typeof ActionTypes.GET_BROWSER_LOCATION_FAILED;
  payload: Location;
}

interface updateLocation {
  type: typeof ActionTypes.UPDATE_LOCATION;
  payload: Location;
}

export type LocationActionTypes =
  | getBrowserLocationSuccess
  | getBrowserLocationFailed
  | updateLocation;
