import React, { Component } from 'react';


class LocationList extends Component {
  state = {}

  getLocationListContainers(){
    const locationListContainers = this.props.locations.map((location) => (
      <li
        key={location.id}
      >{location.title}</li>
    ))
    return locationListContainers
  }

  render() {
    if (!this.props.display) {
      return null
    } else {
      return (
        <div className="location-section">
          <input
            type='text'
            placeholder='Search'
            value={this.props.query}
            onChange={(event) => this.props.whenUpdateQuery(event.target.value)}
          />
          <ul>
            {this.getLocationListContainers()}
          </ul>
	      </div>
	    ); 		
  	}
  }
}

export default LocationList;
