import React, { Component } from 'react';


class LocationList extends Component {
  render() {
  	let locationList = this.props.display

  	if (!locationList) {
  		return null
  	} else {
	    return (
	      <div className="location-section">
          <ul>
            <li>{this.props.locations[0].title}</li>
            <li>{this.props.locations[1].title}</li>
	      	  <li>{this.props.locations[2].title}</li>
          </ul>
	      </div>
	    ); 		
  	}
  }
}

export default LocationList;
