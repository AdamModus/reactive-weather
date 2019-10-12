import { ActionTypes, ForecastActionTypes } from '../../constants';

const initialState = {
  forecast: {}
};

export default function TemperatureUnitReducer(
  state = initialState,
  action: ForecastActionTypes
) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.UPDATE_FORECAST_SUCCESS:
      return {
        ...state,
        forecast: payload,
        status: 'success'
      };

    case ActionTypes.UPDATE_FORECAST_FAILURE:
      return {
        ...state,
        status: 'success'
      };
    default:
      return initialState;
  }
}
