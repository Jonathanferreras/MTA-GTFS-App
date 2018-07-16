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



