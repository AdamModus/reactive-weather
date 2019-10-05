import { ILocationState } from './state/types/location.types';

export const ActionTypes = {
  GET_BROWSER_LOCATION_SUCCESS: 'GET_BROWSER_LOCATION_SUCCESS',
  GET_BROWSER_LOCATION_FAILED: 'GET_BROWSER_LOCATION_FAILED',
  UPDATE_LOCATION: 'UPDATE_LOCATION'
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

export type LocationActionTypes =
  | getBrowserLocationSuccess
  | getBrowserLocationFailed
  | updateLocation;
