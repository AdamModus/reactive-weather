import { ActionTypes, LocationActionTypes } from '../../constants';
import { ILocationState } from '../types/location.types';

const initialState: ILocationState = {
  coordinates: {
    latitude: undefined,
    longitude: undefined
  }
};

export function getBrowserLocationSuccess(
  newLocation: ILocationState
): LocationActionTypes {
  return {
    type: ActionTypes.GET_BROWSER_LOCATION_SUCCESS,
    payload: newLocation
  };
}

export default function LocationReducer(
  state = initialState,
  action: LocationActionTypes
) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.GET_BROWSER_LOCATION_SUCCESS:
      return {
        ...state,
        coordinates: {
          latitude: payload.coordinates.latitude,
          longitude: payload.coordinates.longitude
        },
        status: 'success'
      };
    case ActionTypes.GET_BROWSER_LOCATION_FAILED:
      return {
        ...state,
        status: 'failed'
      };
    default:
      return initialState;
  }
}
