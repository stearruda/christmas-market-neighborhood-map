import React, { Component } from 'react';
import { Marker } from 'react-google-maps'
import ChristmasIcon from '../images/gingerbread-man-48.png'

class MapMarker extends Component {
  render() {
    let animation = null

    if (this.props.animate === true) {
      animation = 1
    } else {
      animation = null
    }

    return(

    	<Marker
      	position={this.props.markerLocation}
        icon={ChristmasIcon}
        animation={animation}
      />
    )
  }
}

export default MapMarker;
