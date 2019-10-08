import { ActionTypes } from '../../constants';
import {
  ITemperatureUnitState,
  TemperatureUnitEnum
} from '../types/temperature-unit.types';

export const updateTemperatureUnit = (
  temperature: TemperatureUnitEnum
) => async (dispatch: Function) => {
  const newTemperatureState: ITemperatureUnitState = {
    temperatureUnit: temperature
  };
  return dispatch({
    type: ActionTypes.UPDATE_TEMPERATURE_UNIT,
    payload: newTemperatureState
  });
};
