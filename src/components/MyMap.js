import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import MapMarker from './MapMarker';

const MyMap = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 48.151504, lng: 11.5923763 }}
  >
   	<MapMarker/>
  </GoogleMap>
))

export default MyMap;
