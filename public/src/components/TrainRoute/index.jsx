import React, { Component } from 'react';

import TrainRouteLine from './TrainRouteLine';
import TrainRouteStops from './TrainRouteStops';



class TrainRoute extends Component {
  render() {
    return (
      <div>
        <TrainRouteLine />
        <TrainRouteStops />
      </div>
    );
  }
}

export default TrainRoute;
