import React, { Component } from 'react';


class LocationList extends Component {
  state = {
    query: '',
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })
  }

  getFilteredLocations(){
    return this.props.locations.filter((location) => {
        return location.title.toLowerCase().includes(
          this.state.query.toLowerCase()
        )
      }
    )
  }

  getLocationListContainers(){
    const locationListContainers = this.getFilteredLocations().map((location) => (
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
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
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
