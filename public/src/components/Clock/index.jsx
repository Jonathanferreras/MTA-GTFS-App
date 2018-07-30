import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { findCurrentTimeStamp } from '../../actions/find';
import { setClockTime } from '../../actions/set';

import moment from 'moment';

class Clock extends Component {
  componentDidMount(){
    let ms = 100;
    let s = 10 * ms;
    let min = 60 * s;

    setInterval(  () => this.props.setClockTime(), ms );
    setInterval( () => this.props.findCurrentTimeStamp(this.props.clock_time), min );
  }

  render() {
    // var cts = moment.utc(this.props.current_time_stamp, "HH:mm");
    // var ct = moment.utc(this.props.clock_time, "HH:mm");

    // var d = moment.duration(ct.diff(cts));

    // var s = moment.utc(+d).format('H:mm');


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
  current_time_stamp: PropTypes.string,
};

const mapStateToProps = state => ({
  clock_time: state.set.clock_time,
  current_time_stamp: state.find.current_time_stamp
});

export default connect(mapStateToProps, { findCurrentTimeStamp, setClockTime })(Clock);
