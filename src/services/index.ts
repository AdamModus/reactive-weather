import forecastServices from './forecast.service';
import locationServices from './location.service';
export default {
  LocationServices: {
    ...locationServices
  },
  ForecastServices: {
    ...forecastServices
  }
};
