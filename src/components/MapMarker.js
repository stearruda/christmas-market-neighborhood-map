import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps'
import ChristmasIcon from '../images/gingerbread-man-48.png'

class MapMarker extends Component {
  state = {
    isOpen: false,
  }

  handleToggleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }


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
        onClick={() => this.handleToggleOpen()}
      >
      {
        this.state.isOpen &&
         <InfoWindow>
             <span>Something</span>
         </InfoWindow>
      }
      </Marker>
    )
  }
}

export default MapMarker;
