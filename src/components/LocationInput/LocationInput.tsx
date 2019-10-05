import { TextField } from '@material-ui/core';
import React, { Component, FormEvent } from 'react';
import { connect } from 'react-redux';
import actions from '../../state/actions/index';
import { StoreState } from '../../state/reducers';
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
  constructor(props: Props) {
    super(props);
    this.state = { currentValue: '' };
  }

  componentDidMount() {
    this.props.getBrowserLocation();
  }

  private _onSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    console.log('------------------------------------');
    console.log('bananas', this.state.currentValue);
    console.log('------------------------------------');
  };

  private _onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ currentValue: evt.target.value });
  };

  render() {
    return (
      <form className="location-input" onSubmit={this._onSubmit}>
        <TextField
          label="Where are you?"
          className="location-input"
          margin="normal"
          variant="filled"
          value={this.state.currentValue}
          onChange={this._onChange}
        />
      </form>
    );
  }
}

const mapStateToProps = (state: StoreState, ownProps: OwnProps): StateProps => {
  return state;
};

const mapDispatchToProps = {
  ...actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationInput);
