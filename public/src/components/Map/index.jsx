import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types'; 

import MapContainer from './MapContainer';
import { fetchGMapsApiKey } from '../../actions/fetch';

class Map extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchGMapsApiKey();
  }
  render() {
    const Url = `https://maps.googleapis.com/maps/api/js?key=${ this.props.google_maps_api_key }`;

    if(this.props.google_maps_api_key !== ''){
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
  fetchGMapsApiKey: PropTypes.func,
  google_maps_api_key: PropTypes.string
};

const mapStateToProps = state => ({
  google_maps_api_key: state.fetch.google_maps_api_key
});

export default connect(mapStateToProps, { fetchGMapsApiKey })(Map);