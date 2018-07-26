import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import TrainRouteDirection from '../TrainRouteDirection';
import TrainRouteStops from '../TrainRouteStops';

class TrainRoute extends Component {
  render() {
    if(this.props.train_route && this.props.train_route.route_id){
      return (
        <div className="train-route">
          {/* <TrainRouteDirection /> */}
          <TrainRouteStops />
        </div>
      );
    } else {
      return <Fragment />;
    }
  }
}

TrainRoute.propTypes = {
  train_route: PropTypes.object,
};

const mapStateToProps = state => ({
  train_route: state.find.train_route,
});

export default connect(mapStateToProps)(TrainRoute);