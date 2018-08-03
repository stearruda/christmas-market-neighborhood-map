import React, { Component } from 'react';
import { Marker } from 'react-google-maps'
import ChristmasIcon from '../images/gingerbread-man-48.png'

class MapMarker extends Component {
  render() {
    return(
    	<Marker
      	position={this.props.location}
        icon={ChristmasIcon}
      />
    )
  }
}

export default MapMarker;
