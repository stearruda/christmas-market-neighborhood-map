import React, { Component } from 'react';
import Header from '../components/Header';
import MyMap from '../components/MyMap';
import LocationList from '../components/LocationList';
/* Data of locations */
import * as locations from '../data/locations.json';
/* Style */
import './App.css';

class App extends Component {
	state = {
		displayLocationList: false,
    locations: locations
	}

	toggleMenuBtn() {
		this.setState(prevState => ({
			displayLocationList: !prevState.displayLocationList
		}))
	}

  render() {
    return (
      <div className='App'>
        <Header
          toggleMenuBtn={this.toggleMenuBtn.bind(this)}
        />
        <LocationList
          display={this.state.displayLocationList}
          locations={this.state.locations}
        />
        <MyMap
          isMarkerShown
          googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyAYb1WQLh2JaKpVrdZegH69tVAI2LH9gNs'
          loadingElement={
            <div
              style={{ height: `100%` }}
            />
          }
          containerElement={
            <div
              style={{ height: `100vh` }}
            />
          }
          mapElement={
            <div
            style={{ height: `100%` }}
            />
          }
        />
      </div>
    );
  }
}

export default App;
