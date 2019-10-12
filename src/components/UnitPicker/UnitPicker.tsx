import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../state/actions';
import { IStoreState } from '../../state/reducers';
import { ITemperatureUnitState } from '../../state/types/temperature.types';
import './UnitPicker.css';

interface OwnProps {}

interface StateProps {
  temperatureUnit: ITemperatureUnitState;
}

interface DispatchProps {
  updateTemperatureUnit: Function;
}

type Props = OwnProps & DispatchProps & StateProps;

interface State {
  currentUnit: String;
}

class UnitPicker extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const initialState = { currentUnit: 'Celsius' };
    this.state = initialState;
    this.props.updateTemperatureUnit(initialState);
  }

  private _onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ currentUnit: evt.target.value });
    this.props.updateTemperatureUnit({ currentUnit: evt.target.value });
  };

  render() {
    return (
      <div className="unit-picker_group">
        <input
          type="radio"
          id="celsius"
          value="Celsius"
          name="temperature-unit"
          className="unit-picker_radio"
          checked={this.state.currentUnit === 'Celsius'}
          onChange={this._onChange}
        ></input>
        <label htmlFor="celsius">Celsius</label>
        <input
          type="radio"
          id="kelvin"
          value="Kelvin"
          name="temperature-unit"
          className="unit-picker_radio"
          checked={this.state.currentUnit === 'Kelvin'}
          onChange={this._onChange}
        ></input>
        <label htmlFor="kelvin">Kelvin</label>
        <input
          type="radio"
          id="Fahrenheit"
          value="Fahrenheit"
          name="temperature-unit"
          className="unit-picker_radio"
          checked={this.state.currentUnit === 'Fahrenheit'}
          onChange={this._onChange}
        ></input>
        <label htmlFor="Fahrenheit">Fahrenheit</label>
      </div>
    );
  }
}

const mapStateToProps = (
  state: IStoreState,
  ownProps: OwnProps
): StateProps => {
  return state;
};

const mapDispatchToProps = {
  ...actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnitPicker);
