import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Marker, Polyline } from "react-google-maps";

import { NEW_YORK_CITY } from '../../constants/coordinates';

class TrainLocations extends Component {
  render() {
    if(this.props.train_stops.length > 0){
      const stops = this.props.train_stops.map((train_stop, index) => {
        return { lat: parseFloat(train_stop.stop_lat), lng: parseFloat(train_stop.stop_lon) };
      }); 

      console.log(stops);

      return (
        <Fragment>
          {
            this.props.train_stops.map((train_stop, index) => {
              return <Marker 
                key={ index.toString() } 
                position={{ lat: parseFloat(train_stop.stop_lat), lng: parseFloat(train_stop.stop_lon) }}
                // animation= { google.maps.Animation.DROP }
              />;
            })
          }
        </Fragment>
      );
    }
    else {
      return <Marker position={{ lat: NEW_YORK_CITY.lat, lng: NEW_YORK_CITY.lng }} />;
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

{/* <Polyline 
  path={ stops }
  geodesic={ true } 
  options={{ 
    strokeColor: route_color,
    strokeOpacity: 1.0,
    strokeWeight: 2,
  }}
/> */}