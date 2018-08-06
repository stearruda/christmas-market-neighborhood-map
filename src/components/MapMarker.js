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
    let infoWindow = null
    if(this.props.isSelected === true){
      animation = 1
      infoWindow =  (<InfoWindow>
             <span>Something</span>
         </InfoWindow>)
    }

    return(
    	<Marker
      	position={this.props.markerLocation}
        icon={ChristmasIcon}
        animation={animation}
        onClick={() => this.handleToggleOpen()}
      >
      {infoWindow}
      </Marker>
    )
  }
}

export default MapMarker;
