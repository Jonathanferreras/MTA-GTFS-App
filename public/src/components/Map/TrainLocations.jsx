import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Marker } from "react-google-maps";

class TrainLocations extends Component {
  render() {
    if(this.props.train_stops.length > 0){
      return (
        <Fragment>
          {
            this.props.train_stops.map((train_stop, index) => {
              return <Marker key={ index.toString() } position={{ lat: parseFloat(train_stop.GTFS_Latitude), lng: parseFloat(train_stop.GTFS_Longitude) }} />;
            })
          }
        </Fragment>
      );
    }
    else {
      return <Marker position={{ lat: 40.804138, lng: -73.937594 }} />;
    }

  }
}

TrainLocations.propTypes = {
  train_stops: PropTypes.array
};

const mapStateToProps = state => ({
  train_stops: state.train_stops,
});

export default connect(mapStateToProps)(TrainLocations);