import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types'; 

import MapContainer from './MapContainer';
import { fetchGoogleMapsApiKey } from '../../actions';

class Map extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchGoogleMapsApiKey();
  }
  render() {
    const Url = `https://maps.googleapis.com/maps/api/js?key=${ this.props.GOOGLE_MAPS_API_KEY }`;

    if(this.props.GOOGLE_MAPS_API_KEY !== ''){
      return (
        <MapContainer
          googleMapURL={ Url }
          isMarkerShown
          loadingElement={ <div style={{ height: `100%` }} /> }
          containerElement={ <div className="map" /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      );
    }
    else{
      return <Fragment />;
    }
  }
}

Map.propTypes = {
  fetchGoogleMapsApiKey: PropTypes.func,
  GOOGLE_MAPS_API_KEY: PropTypes.string
};

const mapStateToProps = state => ({
  GOOGLE_MAPS_API_KEY: state.GOOGLE_MAPS_API_KEY
});

export default connect(mapStateToProps, { fetchGoogleMapsApiKey })(Map);