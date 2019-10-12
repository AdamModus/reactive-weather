import { TextField } from '@material-ui/core';
import React, { Component, FormEvent } from 'react';
import { connect } from 'react-redux';
import actions from '../../state/actions/index';
import { IStoreState } from '../../state/reducers';
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
  setCity: Function;
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

  private onSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    this.props.setCity({ city: this.state.currentValue });
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
