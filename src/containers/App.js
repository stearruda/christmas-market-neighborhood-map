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
			displayLocationList: !prevState.displayLocationList,
		}))
	}

  render() {
    return (
      <div className='App'>
        <Header 
        	toggleMenuBtn = {this.toggleMenuBtn.bind(this)}
        />
        <LocationList
          display = {this.state.displayLocationList}
          locations = {this.state.locations}
        />
        <MyMap />
      </div>
    );
  }
}

export default App;
