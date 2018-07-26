import React, { Component, Fragment } from 'react';

export default class TrainTrips extends Component {
  render() {
    return (
      <Fragment>
        {
          this.props.train_trips.map(train_trip => {
            return(
              train_trip.stop_time_update.map(stop_time => {
                let arrival_time_l = "";
                // let arrival_time_h = "";
                let arrival_delay = "";
                let departure_time_l = "";
                // let departure_time_h = "";
                let departure_delay = "";

                if(stop_time.stop_id === train_stop.stop_id){
                  if(stop_time.arrival && stop_time.arrival.time){
                    arrival_time_l = stop_time.arrival.time.low || 'N/A';
                    // arrival_time_h = stop_time.arrival.time.high || 'N/A';
                    arrival_delay = stop_time.arrival.delay || 'N/A';
                  }
                  if(stop_time.departure && stop_time.departure.time){
                    departure_time_l = stop_time.departure.time.low || 'N/A';
                    // departure_time_h = stop_time.departure.time.high || 'N/A';
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
                      Arrival Time: { this.convertEpochToDate(arrival_time_l) } <br/>
                      Arrival Delay: { arrival_delay } <br/>
                      Departure Time: { this.convertEpochToDate(departure_time_l) } <br/>
                      Departure Delay: { departure_delay }
                  </p>;
                } //end of stop_time if statement
              })
            );
          })
        }      
      </Fragment>
    );
  }
}







