import React, { Component } from 'react';


class LocationList extends Component {
  render() {
  	let locationList = this.props.display

  	if (!locationList) {
  		return null
  	} else {
	    return (
	      <div>
	      	Hello Locations
	      </div>
	    ); 		
  	}
  }
}

export default LocationList;
