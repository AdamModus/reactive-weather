import * as locationActions from './location.actions';
import * as temperatureUnitActions from './temperature-unit.actions';
export default {
  ...locationActions,
  ...temperatureUnitActions
};
