import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './../../state/actions/index';
import './LocationInput.css';

class LocationInput extends Component {
  componentDidMount() {
    this.props.getBrowserLocation();
    console.log('componentDidMount', this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate,', this.props);
  }

  render() {
    return (
      <div className="location-input">
        <TextField
          id="filled-with-placeholder"
          label="Where are you?"
          placeholder="Placeholder"
          className="location-input"
          margin="normal"
          variant="filled"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  ...actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationInput);
