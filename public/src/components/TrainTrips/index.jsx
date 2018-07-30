import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { convertEpochToDate } from '../../utils';
import moment from 'moment';

class TrainTrips extends Component {
  render() {
    if(this.props.train_stop){
      return (
        this.props.train_trips.map(train_trip => {
          return(
            train_trip.stop_time_update.map((stop_time, index) => {
              let arrival_time = "";
              let arrival_delay = "";
              let departure_time = "";
              let departure_delay = "";

              if(stop_time.stop_id === this.props.train_stop.stop_id){
                let arrival_time_left;
                let departure_time_left;

                if(stop_time.arrival && stop_time.arrival.time){
                  arrival_time = convertEpochToDate(stop_time.arrival.time.low) || 'N/A';
                  arrival_delay = stop_time.arrival.delay || 'N/A';

                  let start = moment.utc(this.props.current_time_stamp, "HH:mm");
                  let end = moment.utc(arrival_time, "HH:mm");
                  let d = moment.duration(end.diff(start));

                  arrival_time_left = moment.utc(+d).format('m') + ' mins';
                }
                
                if(stop_time.departure && stop_time.departure.time){
                  departure_time = convertEpochToDate(stop_time.departure.time.low) || 'N/A';
                  departure_delay = stop_time.departure.delay || 'N/A';

                  let start = moment.utc(this.props.current_time_stamp, "HH:mm");
                  let end = moment.utc(departure_time, "HH:mm");
                  let d = moment.duration(end.diff(start));

                  departure_time_left = moment.utc(+d).format('m') + ' mins';
                }

                return <p 
                  key={ index.toString() }
                  style={
                    { 
                      color: '#55efc4', 
                      textAlign: 'justify',
                      backgroundColor: '#2d3436',
                      padding: '1em' 
                    }
                  }>
                    Trip ID: { train_trip.trip.trip_id } <br/>
                    Trip route: { train_trip.trip.route_id } <br/>
                    Trip Stop: { stop_time.stop_id } <br/>
                    Arrival Time: { arrival_time } <br/>
                    Arrival Delay: { arrival_delay } <br/>
                    Departure Time: { departure_time } <br/>
                    Departure Delay: { departure_delay } <br />
                    Time to arrive: { arrival_time_left } <br />
                    Time to depart: { departure_time_left }
                </p>;
              } //end of stop_time if statement
            })
          );
        })
      );
    }
  }
}

TrainTrips.propTypes = {
  train_route: PropTypes.object,
  train_stop: PropTypes.object,
  train_trips: PropTypes.array,
  current_time_stamp: PropTypes.string,
};

const mapStateToProps = state => ({
  train_route: state.find.train_route,
  train_trips: state.fetch.train_trips,
  current_time_stamp: state.find.current_time_stamp,
});

export default connect(mapStateToProps)(TrainTrips);