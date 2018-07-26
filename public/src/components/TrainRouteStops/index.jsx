import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import FaBan from 'react-icons/lib/fa/ban';
import moment from 'moment';

import TrainRouteDirection from '../TrainRouteDirection';
import { fetchTrainTrips } from '../../actions';

class TrainRouteStops extends Component {
  componentDidMount(){
    var milliseconds = 1000;
    var seconds = 10 * milliseconds;

    setInterval(() => {
      this.props.fetchTrainTrips(this.props.train_route.route_id);
    }, seconds);
  }

  convertEpochToDate = (val) => { 
    return (val !== "" ? moment.unix(val).format('h:mm:ss A') : val); 
  }
  
  render() {
    if(this.props.train_stops.length > 0 && this.props.train_trips.length > 0){
      return (
        <Fragment>
          <span className="train-route-stops-title">Train Stops</span>
          <TrainRouteDirection />
          <ul className="train-route-stops">
            {
              this.props.train_stops
              .sort((train_stop_a, train_stop_b) => {
                // let direction = this.props.train_route_direction;
                
                let stop_a = Number(train_stop_a.stop_id.slice(1,3));
                let stop_b = Number(train_stop_b.stop_id.slice(1,3));

                // return (direction === 'N' ? stop_a - stop_b : stop_b - stop_a);
                return stop_a - stop_b;
              })
              .filter(train_stop => train_stop.stop_id[3] === this.props.train_route_direction)
              .map((train_stop, index) => {
                
                return <li className="train-route-stop" key={ index.toString() }>
                  { train_stop.stop_name }

                  {/* Map train trip times to stops */}
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
                </li>;
              })
            }
          </ul>
        </Fragment>
      );
    }
    else if(Object.getOwnPropertyNames(this.props.train_route).length > 0 && this.props.train_stops.length == 0){
      return <span><strong>No train stops available <FaBan style={{color: "#e74c3c"}}/></strong></span>;
    }
    else {
      return <Fragment />;
    }
  }
}

TrainRouteStops.propTypes = {
  fetchTrainTrips: PropTypes.func,
  train_route: PropTypes.object,
  train_stops: PropTypes.array,
  train_trips: PropTypes.array,
  train_route_direction: PropTypes.string
};

const mapStateToProps = state => ({
  train_route: state.find.train_route,
  train_stops: state.fetch.train_stops,
  train_trips: state.fetch.train_trips,
  train_route_direction: state.set.train_route_direction
});

export default connect(mapStateToProps, { fetchTrainTrips })(TrainRouteStops);