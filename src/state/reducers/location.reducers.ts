import { ActionTypes, LocationActionTypes } from '../../constants';
import { ILocationState } from '../types/location.types';

const initialState: ILocationState = {
  coordinates: {
    latitude: undefined,
    longitude: undefined
  },
  city: undefined,
  countryCode: undefined
};

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
        coordinates: {
          latitude: undefined,
          longitude: undefined
        },
        status: 'failed'
      };
    case ActionTypes.UPDATE_CITY_AND_COUNTRY_SUCCESS:
      return {
        ...state,
        city: payload.city,
        countryCode: payload.countryCode,
        status: 'success'
      };
    case ActionTypes.UPDATE_CITY_AND_COUNTRY_FAILURE:
      return {
        ...state,
        city: undefined,
        countryCode: undefined,
        status: 'failed'
      };
    default:
      return initialState;
  }
}
