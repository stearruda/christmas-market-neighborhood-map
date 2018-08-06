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
    clickedLocation: null
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

  selectLocation(location){
    this.setState({clickedLocation: location})
    console.log(location.venueId)

    const api = 'https://api.foursquare.com/v2/venues/'
    const clientId = '2SGDZPKY5NOEIDG4KHMEVYVE2YY3EVQBUY1WNT1ZXQ5DWMP5'
    const clientSecret = '3EI4UPHQ3JGUO0BYTFRNLBDWR1P2KRYZASA2LALAFSSMEFBY'
    let foursquareVenueId = location.venueId

    fetch(`${api}${foursquareVenueId}?client_id=${clientId}&client_secret=${clientSecret}&v=20180806`)
    .then(res => res.json())
    .then(obj => {
      console.log(obj.response.venue.likes.count)
    })
  }

  render() {
    return (
      <div className='App'>
        <Header
          toggleMenuBtn={this.toggleMenuBtn.bind(this)}
        />
        <LocationList
          whenLocationIsClicked={this.selectLocation.bind(this)}
          display={this.state.displayLocationList}
          locations={this.getFilteredLocations()}
          whenUpdateQuery={this.updateQuery.bind(this)}
          query={this.state.query}
        />
        <MyMap
          clickedLocation={this.state.clickedLocation}
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
