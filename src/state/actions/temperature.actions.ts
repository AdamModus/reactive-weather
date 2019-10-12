import { ActionTypes } from '../../constants';
import {
  ITemperatureUnitState,
  TemperatureUnitEnum
} from '../types/temperature.types';

export const updateTemperatureUnit = (temperature: TemperatureUnitEnum) => (
  dispatch: Function
) => {
  const newTemperatureState: ITemperatureUnitState = {
    temperatureUnit: temperature
  };
  dispatch({
    type: ActionTypes.UPDATE_TEMPERATURE_UNIT,
    payload: newTemperatureState
  });
};
