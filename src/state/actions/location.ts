import { types } from "../../constants";
import locationService from "../../services/location";

export const getBrowserLocation = () => async dispatch => {
  try {
    const currentLocation = await locationService.getCurrentBrowserGeolocation();
    return dispatch({
      type: types.GET_BROWSER_LOCATION_SUCCESS,
      payload: currentLocation
    });
  } catch (exception) {
    return dispatch({
      type: types.GET_BROWSER_LOCATION_FAILED,
      payload: "It is not possible to get the browser location"
    });
  }
};

export const locationUpdated = () => async dispatch => {
  // const currentLocation = await locationService.getCurrentBrowserGeolocation();
  return dispatch({ type: types.UPDATE_LOCATION, payload: "Amsterdam" });
};
