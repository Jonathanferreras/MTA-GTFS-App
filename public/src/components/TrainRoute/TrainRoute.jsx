import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { fetchTrainStops } from '../../actions';

class TrainRoute extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if(this.props.route_id != ""){ 
        this.props.fetchTrainStops(this.props.route_id);
      } 
  }

  render() {
    const generateSelectedRoute = (id) => {
      if(id){
        return <span style={{backgroundColor: `#${ this.props.route_color }`}} className="selected-train-route">{ id }</span>;
      }
      else {
        return <span>No route selected.</span>;       
      }
    };

    return (
      <div className="train-route">
        { generateSelectedRoute (this.props.route_id) }
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
