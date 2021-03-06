import { ActionTypes, TemperatureActionTypes } from '../../constants';
import {
  ITemperatureUnitState,
  TemperatureUnitEnum
} from '../types/temperature.types';

const initialState: ITemperatureUnitState = {
  temperatureUnit: TemperatureUnitEnum.CELSIUS
};

export default function TemperatureUnitReducer(
  state = initialState,
  action: TemperatureActionTypes
) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.UPDATE_TEMPERATURE_UNIT:
      return {
        ...state,
        temperatureUnit: payload.temperatureUnit,
        status: 'success'
      };
    default:
      return initialState;
  }
}
