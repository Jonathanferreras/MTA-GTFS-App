import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import TrainRouteButton from './TrainRouteButton';
import { fetchTrainRoutes, fetchSelectedTrainRoute } from '../../actions';

class TrainRoutes extends Component {
  componentDidMount(){
    this.props.fetchTrainRoutes();
  }

  render() {
    if(this.props.train_routes.length > 0){
      return (
        this.props.train_routes.map((train_route, index) => {
          if(train_route.route_color == "")
            train_route.route_color = '6c757d';
            
          return <TrainRouteButton
            onClick={ () => {
              this.props.fetchSelectedTrainRoute(train_route);
            }}
            key={ index.toString() }
            color={ train_route.route_color }
            id={ train_route.route_id } 
          />;
        })
      );
    }
    else {
      return(
        <span>Train Routes are not available at the moment.</span>
      );
    }
  }
}

TrainRoutes.propTypes = {
  fetchTrainRoutes: PropTypes.func,
  fetchSelectedTrainRoute: PropTypes.func,
  train_routes: PropTypes.array,
  onClick: PropTypes.func
};

const mapStateToProps = state => ({
  train_routes: state.train_routes
});

export default connect(mapStateToProps, { fetchTrainRoutes, fetchSelectedTrainRoute })(TrainRoutes);
