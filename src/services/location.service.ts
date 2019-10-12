export default {
  getCurrentBrowserGeolocation: getCurrentBrowserGeolocation,
  getCityAndCountryByCoordinates: getCityAndCountryByCoordinates
};

const GEOLOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 1000,
  maximumAge: 3000
};

const urlBase = 'https://eu1.locationiq.com/v1/reverse.php';
const apiKey = 'c1063b39ddd9f7';
// https://eu1.locationiq.com/v1/reverse.php?key=c1063b39ddd9f7&lat=51.9830918&lon=5.900858899999999&format=json

function buildReverseGeocodingURL(latitude: Number, longitude: Number) {
  return `${urlBase}?key=${apiKey}&lat=${latitude}&lon=${longitude}&format=json`;
}

function getCurrentBrowserGeolocation(options?: any) {
  return new Promise<Position>(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      resolve,
      reject,
      options ? options : GEOLOCATION_OPTIONS
    );
  });
}

function getCityAndCountryByCoordinates(latitude: Number, longitude: Number) {
  return new Promise(function(resolve, reject) {
    try {
      fetch(buildReverseGeocodingURL(latitude, longitude))
        .then(response => response.json())
        .then(result => {
          resolve(result);
        });
    } catch (e) {
      reject('Failed to get user location data');
    }
  });
}
