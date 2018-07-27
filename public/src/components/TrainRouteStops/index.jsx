import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import FaBan from 'react-icons/lib/fa/ban';

import TrainRouteDirection from '../TrainRouteDirection';
import TrainTrips from '../TrainTrips';
import { fetchTrainTrips } from '../../actions/fetch';

class TrainRouteStops extends Component {
    constructor(props){
    super(props);
  }

  componentDidMount(){
    let ms = 100;
    let s = 10 * ms;

    setInterval(() => {
      this.props.fetchTrainTrips(this.props.train_route.route_id);
    }, ( 10 * s ));
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
                  <TrainTrips train_stop={ train_stop } />

                </li>;
              })
            }
          </ul>
        </Fragment>
      );
    }
    //Check if current route is selected and train stops are not available
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