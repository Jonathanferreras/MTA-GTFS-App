import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import FaBan from 'react-icons/lib/fa/ban';

import TrainRouteDirection from './TrainRouteDirection';

class TrainRouteStops extends Component {

  convertEpochToDate = (val) => {
    if(val !== null){
      var date = new Date(val);

      return date;
    }

    return val;
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
                let direction = this.props.train_route_direction;
                let stop_a = Number(train_stop_a.stop_id.slice(1,3));
                let stop_b = Number(train_stop_b.stop_id.slice(1,3));

                return (direction === 'N' ? stop_a - stop_b : stop_b - stop_a);
              })
              .filter(train_stop => train_stop.stop_id.includes(this.props.train_route_direction))
              .map((train_stop, index) => {
                return <li className="train-route-stop" key={ index.toString() }>
                  { train_stop.stop_name }
                  
                  {/* Map train trip times to stops */}
                  {
                    this.props.train_trips.map(train_trip => {
                      return(
                        train_trip.stop_time_update.map(stop_time => {
                          
                          if(stop_time.stop_id === train_stop.stop_id && stop_time.arrival && stop_time.arrival.time){
                            let time_l = stop_time.arrival.time.low || 'N/A';
                            let time_h = stop_time.arrival.time.high || 'N/A';
                            let delay = stop_time.arrival.delay || 'N/A';

                            return <p style={
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
                                Time_Low: { JSON.stringify(this.convertEpochToDate(time_l)) } | Time_High: { JSON.stringify(this.convertEpochToDate(time_h)) } <br/>
                                Delay: { delay }
                            </p>;
                          }
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
    else if(this.props.train_stops && this.props.train_stops.length == 0){
      return <span><strong>No train stops available <FaBan style={{color: "#e74c3c"}}/></strong></span>;
    }
    else {
      return <Fragment />;
    }
  }
}

TrainRouteStops.propTypes = {
  train_stops: PropTypes.object,
  train_trips: PropTypes.object,
  train_route_direction: PropTypes.string
};

const mapStateToProps = state => ({
  train_stops: state.train_stops,
  train_trips: state.train_trips,
  train_route_direction: state.train_route_direction
});

export default connect(mapStateToProps)(TrainRouteStops);