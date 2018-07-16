import React from 'react';
import { PropTypes } from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

import TrainLocations from './TrainLocations';

const NYC_coords = {
  lat: 40.7128,
  lon: -74.0060
};

const MapContainer = withScriptjs(
  withGoogleMap((props) => 
    <GoogleMap defaultZoom={ 9.7 } defaultCenter={{ lat: 40.804138, lng: -73.937594 }}>
      <TrainLocations />
    </GoogleMap>
  )
);

export default MapContainer;



