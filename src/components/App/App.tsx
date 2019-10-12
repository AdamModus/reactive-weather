import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../state/store/store';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import LocationInput from '../LocationInput/LocationInput';
import UnitPicker from '../UnitPicker/UnitPicker';
import WeatherPrediction from '../WeatherPrediction/WeatherPrediction';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <LocationInput />
          <UnitPicker />
          <CurrentWeather />
          <WeatherPrediction />
        </div>
      </Provider>
    );
  }
}

export default App;
