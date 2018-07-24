import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import FaBan from 'react-icons/lib/fa/ban';

import TrainRouteDirection from './TrainRouteDirection';

class TrainRouteStops extends Component {
  
  render() {
    if(this.props.train_stops.length > 0){
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
                return <li className="train-route-stop" key={ index.toString() }>{ train_stop.stop_name }</li>;
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
  train_route_direction: PropTypes.string
};

const mapStateToProps = state => ({
  train_stops: state.train_stops,
  train_route_direction: state.train_route_direction
});

export default connect(mapStateToProps)(TrainRouteStops);
