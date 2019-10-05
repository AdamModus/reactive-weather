import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import React, { Component } from 'react';
import './UnitPicker.css';

class UnitPicker extends Component {
  private _onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log('------------------------------------');
    console.log('bananas', evt.target.value);
    console.log('------------------------------------');
  };

  render() {
    return (
      <div className="unit-picker">
        <RadioGroup aria-label="Temperature picker" onChange={this._onChange}>
          <FormControlLabel
            value="Calesius"
            control={<Radio />}
            label="Celsius"
          />
          <FormControlLabel value="Kelvin" control={<Radio />} label="Kelvin" />
          <FormControlLabel
            value="Fahrenheit"
            control={<Radio />}
            label="Fahrenheit"
          />
        </RadioGroup>
      </div>
    );
  }
}

export default UnitPicker;
