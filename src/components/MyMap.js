import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import MapMarker from './MapMarker';

const MyMap = withScriptjs(withGoogleMap((props) => {
	const markers = props.locations.map((location) => {
		let amISelected = false
			if((props.clickedLocation != null)
					&& (location.id === props.clickedLocation.id)){
					amISelected = true
			}			
	   	return (
	   		<MapMarker
		   		key={location.id}
		   		location={location}
		   		markerLocation={{lat: location.position.lat, lng:location.position.lng}}
		   		isSelected={amISelected}
		   		whenMarkerIsClicked={props.whenMarkerIsClicked}
	   		/>
	  	)
  	}
  )

		return (
		  <GoogleMap
		    defaultZoom={13}
		    defaultCenter={{ lat: 48.151504, lng: 11.5923763 }}
		  >
		  	{markers}
		  </GoogleMap>
	  )
	}
))

export default MyMap;
