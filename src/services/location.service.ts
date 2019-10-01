export default {
  getCurrentBrowserGeolocation: getCurrentBrowserGeolocation
};

const GEOLOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 1000,
  maximumAge: 3000
};

function getCurrentBrowserGeolocation(options?: any) {
  return new Promise<Position>(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      resolve,
      reject,
      options ? options : GEOLOCATION_OPTIONS
    );
  });
}
