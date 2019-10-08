import { ActionTypes } from '../../constants';
import locationService from '../../services/location.service';

export const getBrowserLocation = () => async (dispatch: Function) => {
  try {
    const currentBrowserCoords: Position = await locationService.getCurrentBrowserGeolocation();
    const currentLocation = {
      coordinates: {
        latitude: currentBrowserCoords.coords.latitude,
        longitude: currentBrowserCoords.coords.longitude
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
  const currentLocation = await locationService.getCurrentBrowserGeolocation();
  return dispatch({
    type: ActionTypes.UPDATE_LOCATION,
    payload: currentLocation
  });
};
