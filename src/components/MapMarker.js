import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps'
import ChristmasIcon from '../images/gingerbread-man-48.png'

class MapMarker extends Component {
  state = {}

  handleMarkerOnClick = () => {
    this.props.whenMarkerIsClicked(this.props.location)
  }


  render() {
    let animation = null
    let infoWindow = null
    if(this.props.isSelected === true){
      animation = 1

      let infoWindowText = this.props.location.title
      let numberOfLikes = '...'
      if(this.props.clickedLocationLikes !== null){
        numberOfLikes = this.props.clickedLocationLikes
      }

      infoWindow =  (<InfoWindow>
            <div>
             <h3>{infoWindowText}</h3>
             <p>Number of Likes: {numberOfLikes}</p>
            </div>
         </InfoWindow>)
    }

    return(
    	<Marker
      	position={this.props.markerLocation}
        icon={ChristmasIcon}
        animation={animation}
        onClick={() => this.handleMarkerOnClick()}
      >
      {infoWindow}
      </Marker>
    )
  }
}

export default MapMarker;
