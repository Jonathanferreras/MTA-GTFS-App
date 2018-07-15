import React from 'react';
import { PropTypes } from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MapContainer = withScriptjs(
  withGoogleMap((props) => 
    <GoogleMap defaultZoom={ 10 } defaultCenter={{ lat: 40.7128, lng: -74.0060 }}>
      { props.isMarkerShown && <Marker position={{ lat: 40.7128, lng: -74.0060 }} /> }
    </GoogleMap>
  )
);

MapContainer.propTypes = {
  isMarkerShown: PropTypes.bool
};

export default MapContainer;

