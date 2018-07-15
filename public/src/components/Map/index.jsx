import React, { Component } from 'react';

import MapContainer from './MapContainer';
import { GOOGLE_MAPS_API_KEY } from '../../config/googleMaps.config';

export default class Map extends Component {
  render() {
    const Url = `https://maps.googleapis.com/maps/api/js?key=${ GOOGLE_MAPS_API_KEY }`;

    return (
      <MapContainer
        googleMapURL={ Url }
        isMarkerShown
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}
