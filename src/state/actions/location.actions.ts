import { ActionTypes } from '../../constants';
import locationService from '../../services/location.service';
import { Location } from '../types/location.types';

export const getBrowserLocation = () => async (dispatch: Function) => {
  try {
    const currentBrowserLocation: Position = await locationService.getCurrentBrowserGeolocation();
    const currentLocation: Location = {
      coordinates: {
        latitude: currentBrowserLocation.coords.latitude,
        longitude: currentBrowserLocation.coords.longitude
      }
    };
    return dispatch({
      type: ActionTypes.GET_BROWSER_LOCATION_SUCCESS,
      payload: currentLocation
    });
  } catch (exception) {
    return dispatch({
      type: ActionTypes.GET_BROWSER_LOCATION_FAILED,
      payload: 'It is not possible to get the browser location'
    });
  }
};

export const locationUpdated = () => async (dispatch: Function) => {
  // const currentLocation = await locationService.getCurrentBrowserGeolocation();
  return dispatch({ type: ActionTypes.UPDATE_LOCATION, payload: 'Amsterdam' });
};
