import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMap = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 48.151504, lng: 11.5923763 }}
  >
    {props.isMarkerShown &&
    	<Marker
	    	position={{ lat: 48.151504, lng: 11.5923763 }}
	    />
    }
  </GoogleMap>
))

export default MyMap;
