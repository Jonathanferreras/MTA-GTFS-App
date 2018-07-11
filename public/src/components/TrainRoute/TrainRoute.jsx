import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { fetchTrainStops } from '../../actions';

class TrainRoute extends Component {
  constructor(props){
    super(props);
  }

  componentDidUpdate(prevProps){
    if(this.props.route_id !== prevProps.route_id){
      this.props.fetchTrainStops(this.props.route_id);
    }
  }

  render() {
    const selectedRoute = (id) => {
      if(id){
        return <span style={{backgroundColor: `#${ this.props.route_color }`}} className="selected-train-route">{ id }</span>;
      }
      else {
        return <span>No route selected.</span>;       
      }
    };

    const trainStops = (train_stops) => {
      if(train_stops.length > 0){
        return(
          train_stops.map((train_stop, index) => {
            return <li key={index.toString()}>{ train_stop.stop_name }</li>;
          })
        );
      }
      else {

      }
    };

    return (
      <div className="train-route">
        { selectedRoute(this.props.route_id) }
        { trainStops(this.props.train_stops) }
      </div>
    );
  }
}

TrainRoute.propTypes = {
  fetchTrainStops: PropTypes.func,
  train_stops: PropTypes.array,
  route_id: PropTypes.string,
  route_color: PropTypes.string
};

const mapStateToProps = state => ({
  train_stops: state.train_stops
});

export default connect(mapStateToProps, { fetchTrainStops })(TrainRoute);
