import React, { Component } from "react";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import LocationInput from "../LocationInout/LocationInput";
import WeatherPrediction from "../WeatherPrediction/WeatherPrediction";
import UnitPicker from "../UnitPicker/UnitPicker";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UnitPicker />
        <LocationInput />
        <CurrentWeather />
        <WeatherPrediction />
      </div>
    );
  }
}

export default App;
