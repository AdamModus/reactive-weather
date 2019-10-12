import { ActionTypes } from '../../constants';
import Services from './../../services/index';

export const getWeatherForecast = (
  city: String,
  countryCode?: String
) => async (dispatch: Function) => {
  try {
    const weatherForecast = await Services.ForecastServices.getWeatherForecast(
      city,
      countryCode
    );
    dispatch({
      type: ActionTypes.UPDATE_FORECAST_SUCCESS,
      payload: weatherForecast
    });
  } catch (exception) {
    dispatch({
      type: ActionTypes.UPDATE_FORECAST_FAILURE,
      payload: 'Unable to get the weather forecast'
    });
  }
};
