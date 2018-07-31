import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { convertEpochToDate, compareTimes } from '../../utils';
import moment from 'moment';

class TrainTrips extends Component {
  render() {
    if(this.props.train_stop){
      return (
        this.props.train_trips.map(train_trip => {
          return(
            train_trip.stop_time_update.map((stop_time, index) => {
              let arrival_time = "N/A";
              let arrival_delay = "N/A";

              let departure_time = "N/A";
              let departure_delay = "N/A";

              if(stop_time.stop_id === this.props.train_stop.stop_id){
                let arrival_time_left = 'N/A';
                let departure_time_left = 'N/A';

                if(stop_time.arrival && stop_time.arrival.time){
                  arrival_time = convertEpochToDate(stop_time.arrival.time.low);
                  arrival_delay = stop_time.arrival.delay;
                  arrival_time_left = compareTimes(this.props.current_time_stamp, arrival_time);
                }

                if(stop_time.departure && stop_time.departure.time){
                  departure_time = convertEpochToDate(stop_time.departure.time.low);
                  departure_delay = stop_time.departure.delay;
                  departure_time_left = compareTimes(this.props.current_time_stamp, departure_time);
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
                    Arriving in: { arrival_time_left } <br />
                    Leaving in: { departure_time_left }
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

                // return <p 
                //   key={ index.toString() }
                //   style={
                //     { 
                //       color: '#55efc4', 
                //       textAlign: 'justify',
                //       backgroundColor: '#2d3436',
                //       padding: '1em' 
                //     }
                //   }>
                //     Trip ID: { train_trip.trip.trip_id } <br/>
                //     Trip route: { train_trip.trip.route_id } <br/>
                //     Trip Stop: { stop_time.stop_id } <br/>
                //     Arrival Time: { arrival_time } <br/>
                //     Arrival Delay: { arrival_delay } <br/>
                //     Departure Time: { departure_time } <br/>
                //     Departure Delay: { departure_delay } <br />
                //     Arriving in: { arrival_time_left } <br />
                //     Leaving in: { departure_time_left }
                // </p>;