import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class TrainRouteStops extends Component {
  
  render() {
    if(this.props.train_stops.length > 0){
      console.log(this.props.train_stops.length);
      return (
        <ul className="train-route-stops">
          {
            this.props.train_stops.map((train_stop, index) => {
              return <li className="train-route-stop" key={ index.toString() }>{ train_stop.stop_name }</li>;
            })
          }
        </ul>
      );
    }
    else if(this.props.train_stops && this.props.train_stops.length == 0){
      return <span>no train stops available</span>;
    }
    else {
      return <Fragment />;
    }
  }
}

TrainRouteStops.propTypes = {
  train_stops: PropTypes.array,
};

const mapStateToProps = state => ({
  train_stops: state.train_stops
});

export default connect(mapStateToProps)(TrainRouteStops);
