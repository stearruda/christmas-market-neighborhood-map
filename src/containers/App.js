import React, { Component } from "react";
import Header from "../components/Header";
import MyMap from "../components/MyMap";
import LocationList from "../components/LocationList";
/* Style */
import "./App.css";

class App extends Component {
  state = {
    displayLocationList: false,
    locations: [],
    query: "",
    clickedLocation: null,
    clickedLocationLikes: null
  };

  componentDidMount() {
    fetch(`/markets`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(`Sorry, can't get information from Markets...`);
        }
      })
      .then(responseParsed => {
        this.setState({
          locations: responseParsed
        });
      })
      .catch(error => {
        console.log(`Info didn't load due to error: ${error}`);
      });
  }

  // Toggle Location List when Menu Button is clicked
  toggleMenuBtn() {
    this.setState(prevState => ({
      displayLocationList: !prevState.displayLocationList
    }));
  }

  // Handle with the input when is typed
  updateQuery(query) {
    this.setState({
      query: query
    });
  }

  // Filter locations
  // Code Reference: Building A Search Filter-https://www.youtube.com/watch?v=OlVkYnVXPl0
  getFilteredLocations() {
    return this.state.locations.filter(location => {
      // https://dev.to/adroitcoder/includes-vs-indexof-in-javascript
      return location.title
        .toLowerCase()
        .includes(this.state.query.toLowerCase());
    });
  }

  selectLocation(location) {
    this.setState({
      clickedLocation: location,
      clickedLocationLikes: null,
      displayLocationList: false
    });

    if (location !== null) {
      const api = "https://api.foursquare.com/v2";
      const resource = `venues/${location.venueId}/likes`;
      const clientId = "2SGDZPKY5NOEIDG4KHMEVYVE2YY3EVQBUY1WNT1ZXQ5DWMP5";
      const clientSecret = "3EI4UPHQ3JGUO0BYTFRNLBDWR1P2KRYZASA2LALAFSSMEFBY";

      // Fetch data from Foursquare
      fetch(
        `${api}/${resource}?client_id=${clientId}&client_secret=${clientSecret}&v=20180806`
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            alert(`Sorry, can't get information from Foursquare...`);
            throw new Error(`Sorry, can't get information from Foursquare...`);
          }
        })
        .then(obj => {
          this.setState({ clickedLocationLikes: obj.response.likes.count });
        })
        //Manage error when data is retrieved from Foursquare
        .catch(error => {
          alert(
            `Sorry, can't get information from Foursquare due to error ${error}`
          );
          console.log(`Info didn't load due to error: ${error}`);
        });
    }
  }

  render() {
    return (
      <div className="App">
        <Header toggleMenuBtn={this.toggleMenuBtn.bind(this)} />
        <LocationList
          whenLocationIsClicked={this.selectLocation.bind(this)}
          isDisplayed={this.state.displayLocationList}
          locations={this.getFilteredLocations()}
          whenUpdateQuery={this.updateQuery.bind(this)}
          query={this.state.query}
        />
        {!navigator.onLine && (
          <h1>
            Ops! Something went wrong. Check your connection and try again.
          </h1>
        )}
        <MyMap
          // Data of Likes came from Foursquare API
          clickedLocationLikes={this.state.clickedLocationLikes}
          whenMarkerIsClicked={this.selectLocation.bind(this)}
          clickedLocation={this.state.clickedLocation}
          locations={this.getFilteredLocations()}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAYb1WQLh2JaKpVrdZegH69tVAI2LH9gNs"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div
              style={{ height: `100vh` }}
              role="application"
              tabIndex="0"
              aria-label="Map with locations of Christmas Markets"
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default App;
