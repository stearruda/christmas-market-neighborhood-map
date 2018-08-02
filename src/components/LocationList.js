import React, { Component } from 'react';


class LocationList extends Component {
  state = {
    markets: this.props.locations
  }

  render() {
  	let locationList = this.props.display

    const createLocationContainer = (location) => (
      <li
        key={location.id}
      >{location.title}</li>
    )

    const locationListContainer = this.state.markets.map(createLocationContainer)


    if (!locationList) {
      return null
    } else {
      return (
        <div className="location-section">
          <ul>
            {locationListContainer}
          </ul>
	      </div>
	    ); 		
  	}
  }
}

export default LocationList;
