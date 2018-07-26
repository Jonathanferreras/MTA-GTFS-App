import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { fetchTrainStops } from '../../actions/fetch';

class TrainRouteLine extends Component {
  constructor(props){
    super(props);
  }
  render() {
    if(Object.getOwnPropertyNames(this.props.train_route).length > 0){
      this.props.fetchTrainStops(this.props.train_route.route_id);

      const Style = {
        backgroundColor: `#${ this.props.train_route.route_color }`
      };

      return (
        <div className="train-route-line">
          <span className="train-route-line-sign" style={ Style } ><strong>{ this.props.train_route.route_id }</strong></span>
          <span className="train-route-name"><strong>{ this.props.train_route.route_long_name }</strong></span>
        </div>
      );
    }
    else {
      return(
        <div className="no-train-route-line" style={{  }}><strong>No route selected.</strong></div>        
      );
    }
  }
}

TrainRouteLine.propTypes = {
  fetchTrainStops: PropTypes.func,
  train_route: PropTypes.object
};

const mapStateToProps = state => ({
  train_route: state.find.train_route,
});

export default connect(mapStateToProps, { fetchTrainStops })(TrainRouteLine);