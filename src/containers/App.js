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
    locations: locations,
    query: '',
    clickedLocationId: null
	}

	toggleMenuBtn() {
		this.setState(prevState => ({
			displayLocationList: !prevState.displayLocationList
		}))
	}

  updateQuery(query){
    this.setState({
      query: query
    })
  }

  // Building A Search Filter - https://www.youtube.com/watch?v=OlVkYnVXPl0
  getFilteredLocations(){
    return this.state.locations.filter((location) => {
        // https://dev.to/adroitcoder/includes-vs-indexof-in-javascript
        return location.title.toLowerCase().includes(
          this.state.query.toLowerCase()
        )
      }
    )
  }

  animateMarker(id){
    this.setState({clickedLocationId: id})
  }

  render() {
    return (
      <div className='App'>
        <Header
          toggleMenuBtn={this.toggleMenuBtn.bind(this)}
        />
        <LocationList
          whenLocationIsClicked={this.animateMarker.bind(this)}
          display={this.state.displayLocationList}
          locations={this.getFilteredLocations()}
          whenUpdateQuery={this.updateQuery.bind(this)}
          query={this.state.query}
        />
        <MyMap
          clickedLocationId={this.state.clickedLocationId}
          locations={this.getFilteredLocations()}
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
