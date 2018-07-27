import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { findCurrentTimeStamp } from '../../actions/find';
import { setClockTime } from '../../actions/set';

class Clock extends Component {
  componentDidMount(){
    let ms = 100;
    let s = 10 * ms;
    let min = 60 * s;

    setInterval(  () => this.props.setClockTime(), ms );
    setInterval( () => this.props.findCurrentTimeStamp(this.props.clock_time), min );
  }

  render() {
    return (
      <div className="clock">
        <span>{ this.props.clock_time }</span>
      </div>
    );
  }
}

Clock.propTypes = {
  findCurrentTimeStamp: PropTypes.func,
  setClockTime: PropTypes.func,
  clock_time: PropTypes.string,
};

const mapStateToProps = state => ({
  clock_time: state.set.clock_time,
});

export default connect(mapStateToProps, { findCurrentTimeStamp, setClockTime })(Clock);
