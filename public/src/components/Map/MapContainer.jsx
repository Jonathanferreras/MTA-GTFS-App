// import React, { Component, Fragment } from 'react';
// import { connect } from 'react-redux';
// import { PropTypes } from 'prop-types';
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// class MapContainer extends Component{
//   render(){
//     if(this.props.train_stops.length > 0){
//       return(
//         withScriptjs(
//           withGoogleMap(() => {
//             return <GoogleMap defaultZoom={ 10 } defaultCenter={{ lat: 40.7128, lng: -74.0060 }}>
//               { 
//                 this.props.train_stops.map((train_stop, index) =>{
//                   return <Marker key={ index.toString() } position={{ lat: train_stop.stop_lat, lng: train_stop.stop_lon }} />;
//                 })
//               }
//             </GoogleMap>;
//           })
//         )
//       );
//     }
//     else{
//       return <Fragment />;
//     }
//   }
// } 

// MapContainer.propTypes = {
//   train_stops: PropTypes.object
// };

// const mapStateToProps = state => ({
//   train_stops: state.train_stops,
// });

// export default connect(mapStateToProps)(MapContainer);

import React from 'react';
import { PropTypes } from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

import TrainLocations from './TrainLocations';

const MapContainer = withScriptjs(
  withGoogleMap((props) => 
    <GoogleMap defaultZoom={ 10 } defaultCenter={{ lat: 40.7128, lng: -74.0060 }}>
      <TrainLocations />
    </GoogleMap>
  )
);

export default MapContainer;



