import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { fetchTrainStops } from '../../actions';

class TrainRouteLine extends Component {
  render() {
    if(Object.getOwnPropertyNames(this.props.train_route).length !== 1){
      this.props.fetchTrainStops(this.props.train_route.route_id);

      const Style = {
        backgroundColor: `#${ this.props.train_route.route_color }`
      };

      return (
        <div className="train-route">
          <span className="train-route-line" style={ Style } ><strong>{ this.props.train_route.route_id }</strong></span>
          <span className="train-route-name"><strong>{ this.props.train_route.route_long_name }</strong></span>
        </div>
      );
    }
    else {
      return(
        <span><strong>No route selected.</strong></span>        
      );
    }
  }
}

TrainRouteLine.propTypes = {
  fetchTrainStops: PropTypes.func,
  train_route: PropTypes.object
};

const mapStateToProps = state => ({
  train_route: state.train_route,
});

export default connect(mapStateToProps, { fetchTrainStops })(TrainRouteLine);