import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps'
import ChristmasIcon from '../images/gingerbread-man-48.png'
import PoweredByFoursquare from '../images/Powered-by-Foursquare-full-color-300.png'

class MapMarker extends Component {
  state = {}

  handleMarkerOnClick = () => {
    this.props.whenMarkerIsClicked(this.props.location)
  }

  handleInfoWindowOnClose = () => {
    this.props.whenMarkerIsClicked(null)
  }

  render() {
    // Initially the Markers have no animations or InfoWindow
    let animation = null
    let infoWindow = null

    // When a location is clicked on the Location List
    // then the Marker will receive the animation and InfoWindow
    if(this.props.isSelected === true){
      animation = 1

      let numberOfLikes = '...'
      if(this.props.clickedLocationLikes !== null){
        numberOfLikes = this.props.clickedLocationLikes
      }

      infoWindow = (
        <InfoWindow onCloseClick={() => this.handleInfoWindowOnClose()}>
          <div className='infowindow-container'>
            <h3>{this.props.location.title}</h3>
            <p>Likes of this place: {numberOfLikes}</p>
            <img alt='Content Powered by Foursquare' src={PoweredByFoursquare}/>
          </div>
        </InfoWindow>
      )
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
