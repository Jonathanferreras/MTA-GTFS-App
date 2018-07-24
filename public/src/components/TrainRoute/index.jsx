import React, { Component } from 'react';

import TrainRouteLine from './TrainRouteLine';
import TrainRouteDirection from './TrainRouteDirection';
import TrainRouteStops from './TrainRouteStops';

class TrainRoute extends Component {
  render() {
    return (
      <div className="train-route">
        {/* <TrainRouteLine /> */}
        <TrainRouteStops />
      </div>
    );
  }
}

export default TrainRoute;
