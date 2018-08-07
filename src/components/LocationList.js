import React, { Component } from 'react';


class LocationList extends Component {
  state = {}

  getLocationListContainers(){
    const locationListContainers = this.props.locations.map((location) => (
      <li
        key={location.id}
        tabIndex={this.props.isDisplayed ? '0' : '1'}
        onClick={() => this.props.whenLocationIsClicked(location)}
      >{location.title}</li>
    ))
    return locationListContainers
  }

  render() {
    if (!this.props.isDisplayed) {
      return null
    } else {
      return (
        <div className="location-section">
          <input
            type='text'
            aria-label='Filter location by name'
            tabIndex='0'
            placeholder='Search'
            value={this.props.query}
            onChange={(event) => this.props.whenUpdateQuery(event.target.value)}
          />
          <ul aria-label='Location List'>
            {this.getLocationListContainers()}
          </ul>
	      </div>
	    ); 		
  	}
  }
}

export default LocationList;
