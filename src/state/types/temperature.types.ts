export interface ITemperatureUnitState {
  temperatureUnit: TemperatureUnitEnum | undefined;
}

export enum TemperatureUnitEnum {
  CELSIUS = 'Celsius',
  KELVIN = 'Kelvin',
  FAHRENHEIT = 'Fahrenheit'
}
