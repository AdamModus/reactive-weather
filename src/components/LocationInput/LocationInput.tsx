import { TextField } from '@material-ui/core';
import React, { Component, FormEvent } from 'react';
import { connect } from 'react-redux';
import actions from '../../state/actions/index';
import { IStoreState } from '../../state/reducers';
import store from './../../state/store/store';
import './LocationInput.css';

interface OwnProps {}

interface StateProps {
  location: {
    coordinates: {
      latitude?: Number;
      longitude?: Number;
    };
  };
}

interface DispatchProps {
  getBrowserLocation: Function;
}

type Props = OwnProps & DispatchProps & StateProps;

interface State {
  currentValue: String;
}

class LocationInput extends Component<Props, State> {
  private locationSelector = (state: IStoreState) => {
    return state.location;
  };

  constructor(props: Props) {
    super(props);
    this.state = { currentValue: '' };
    store.subscribe(this.storeUpdated);
  }

  componentDidMount() {
    this.props.getBrowserLocation();
  }

  private storeUpdated = () => {
    const currState = store.getState();
    console.log('------------------------------------');
    console.log('bananas store updated', this.locationSelector(currState));
    console.log('------------------------------------');
    // https://eu1.locationiq.com/v1/reverse.php?key=c1063b39ddd9f7&lat=51.9830918&lon=5.900858899999999&format=json
    // https://samples.openweathermap.org/data/2.5/weather?q=Arnhem&appid=b6907d289e10d714a6e88b30761fae22
  };

  private onSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    console.log('------------------------------------');
    console.log('bananas', this.state.currentValue);
    console.log('------------------------------------');
  };

  private onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ currentValue: evt.target.value });
  };

  render() {
    return (
      <form className="location-input" onSubmit={this.onSubmit}>
        <TextField
          label="Where are you?"
          className="location-input"
          margin="normal"
          variant="filled"
          value={this.state.currentValue}
          onChange={this.onChange}
        />
      </form>
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
)(LocationInput);
