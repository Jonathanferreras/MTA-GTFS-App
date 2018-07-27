import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { convertEpochToDate } from '../../utils';

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
                if(stop_time.arrival && stop_time.arrival.time){
                  arrival_time = stop_time.arrival.time.low || 'N/A';
                  arrival_delay = stop_time.arrival.delay || 'N/A';
                }
                if(stop_time.departure && stop_time.departure.time){
                  departure_time = stop_time.departure.time.low || 'N/A';
                  departure_delay = stop_time.departure.delay || 'N/A';
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
                    Arrival Time: { convertEpochToDate(arrival_time) } <br/>
                    Arrival Delay: { arrival_delay } <br/>
                    Departure Time: { convertEpochToDate(departure_time) } <br/>
                    Departure Delay: { departure_delay }
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
  train_trips: PropTypes.array
};

const mapStateToProps = state => ({
  train_route: state.find.train_route,
  train_trips: state.fetch.train_trips
});

export default connect(mapStateToProps)(TrainTrips);