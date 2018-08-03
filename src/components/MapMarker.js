import React, { Component } from 'react';
import { Marker } from 'react-google-maps'
import ChristmasIcon from '../images/gingerbread-man-48.png'

class MapMarker extends Component {
  render() {
    return(
    	<Marker
      	position={{ lat: 48.151504, lng: 11.5923763 }}
        icon={ChristmasIcon}
      />
    )
  }
}

export default MapMarker;
