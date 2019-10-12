export default {
  getWeatherForecast: getWeatherForecast
};

const urlBase = 'http://api.openweathermap.org/data/2.5/forecast';
const apiKey = '0316ba5cb8868612facee65c17e8f4a0';
// http://api.openweathermap.org/data/2.5/forecast?appid=0316ba5cb8868612facee65c17e8f4a0&q=Arnhem

function buildForecastURL(city: String, countryCode?: String) {
  const countryCodeFragment =
    typeof countryCode === 'string' ? ',' + countryCode : '';
  return `${urlBase}?appid=${apiKey}&q=${city}${countryCodeFragment}`;
}

function getWeatherForecast(city: String, countryCode?: String) {
  return new Promise(function(resolve, reject) {
    try {
      fetch(buildForecastURL(city, countryCode))
        .then(response => response.json())
        .then(result => {
          resolve(result);
        });
    } catch (e) {
      reject('Failed to get the weather forecast');
    }
  });
}
