import { ActionTypes } from '../../constants';
import store from '../store/store';
import Services from './../../services';
import { getWeatherForecast } from './forecast.actions';

function hasCityAlreadyBeenSet() {
  return store.getState().location.city !== undefined;
}

export const getBrowserLocation = () => async (dispatch: Function) => {
  try {
    const currentBrowserCoords: Position = await Services.LocationServices.getCurrentBrowserGeolocation();
    const currentLocation = {
      coordinates: {
        latitude: currentBrowserCoords.coords.latitude,
        longitude: currentBrowserCoords.coords.longitude
      }
    };
    dispatch({
      type: ActionTypes.GET_BROWSER_LOCATION_SUCCESS,
      payload: currentLocation
    });

    console.log('------------------------------------');
    console.log('bananas', getCityAndCountryByCoordinates);
    console.log('------------------------------------');
    getCityAndCountryByCoordinates(currentLocation);
  } catch (exception) {
    dispatch({
      type: ActionTypes.GET_BROWSER_LOCATION_FAILED
    });
  }
};

export const getCityAndCountryByCoordinates = (location: any) => async (
  dispatch: Function
) => {
  console.log('------------------------------------');
  console.log('bananas');
  console.log('------------------------------------');
  try {
    console.log('------------------------------------');
    console.log('bananas trying to getCityAndCountryByCoordinates');
    console.log('------------------------------------');

    if (hasCityAlreadyBeenSet()) {
      console.log('------------------------------------');
      console.log('bananas hasCityAlreadyBeenSet');
      console.log('------------------------------------');
      return;
    }

    const reverseGeocodingInfo: any = await Services.LocationServices.getCityAndCountryByCoordinates(
      location.coordinates.latitude,
      location.coordinates.longitude
    );

    if (hasCityAlreadyBeenSet()) {
      console.log('------------------------------------');
      console.log('bananas hasCityAlreadyBeenSet');
      console.log('------------------------------------');
      return;
    }

    const locationCityAndCountry = {
      city: reverseGeocodingInfo.address.city,
      countryCode: reverseGeocodingInfo.address.country_code
    };

    console.log('------------------------------------');
    console.log('bananas', locationCityAndCountry);
    console.log('------------------------------------');

    dispatch({
      type: ActionTypes.UPDATE_CITY_AND_COUNTRY_SUCCESS,
      payload: locationCityAndCountry
    });
  } catch (exception) {
    dispatch({
      type: ActionTypes.UPDATE_CITY_AND_COUNTRY_FAILURE
    });
  }
};

export const setCity = (city: String) => (dispatch: Function) => {
  dispatch({
    type: ActionTypes.UPDATE_CITY_AND_COUNTRY_SUCCESS,
    payload: { city }
  });

  console.log('------------------------------------');
  console.log('bananas getWeatherForecast', getWeatherForecast);
  console.log('------------------------------------');
  getWeatherForecast(city);
};
