import React, { Component } from 'react';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import LocationInput from '../LocationInput/LocationInput';
import UnitPicker from '../UnitPicker/UnitPicker';
import WeatherPrediction from '../WeatherPrediction/WeatherPrediction';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationInput />
        <UnitPicker />
        <CurrentWeather />
        <WeatherPrediction />
      </div>
    );
  }
}

export default App;
