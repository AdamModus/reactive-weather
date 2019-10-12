import * as forecastActions from './forecast.actions';
import * as locationActions from './location.actions';
import * as temperatureUnitActions from './temperature.actions';

export default {
  ...locationActions,
  ...temperatureUnitActions,
  ...forecastActions
};
