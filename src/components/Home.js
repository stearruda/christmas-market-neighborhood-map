import React, { Component } from "react";
import Header from "../components/Header";
import NewMarketForm from "../components/NewMarketForm";
import MyMap from "../components/MyMap";
import LocationList from "../components/LocationList";

class Home extends Component {
  state = {
    displayLocationList: false,
    isAddMarketDisplayed: false,
    shouldUpdateMarket: false,
    locations: [],
    query: "",
    marketId: "",
    inputValue: {
      title: "",
      foursquareVenueId: "",
      lat: "",
      lon: "",
    },
    clickedLocation: null,
    clickedLocationLikes: null,
  };

  componentDidMount() {
    fetch(`/api/markets`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(`Sorry, can't get information from Markets...`);
        }
      })
      .then((responseParsed) => {
        this.setState({
          locations: responseParsed,
        });
      })
      .catch((error) => {
        console.log(`Info didn't load due to error: ${error}`);
      });
  }

  // Toggle Location List when Menu Button is clicked
  toggleMenuBtn() {
    this.setState((prevState) => ({
      displayLocationList: !prevState.displayLocationList,
    }));
  }

  toggleAddMarketBtn() {
    this.setState((prevState) => ({
      isAddMarketDisplayed: !prevState.isAddMarketDisplayed,
      shouldUpdateMarket: false,
      inputValue: {
        title: "",
        foursquareVenueId: "",
        lat: "",
        lon: "",
      },
    }));
  }

  // Handle with the input when is typed
  updateQuery(query) {
    this.setState({
      query: query,
    });
  }

  handleOnChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      ...this.state,
      inputValue: { ...this.state.inputValue, [name]: value },
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { shouldUpdateMarket, marketId, inputValue } = this.state;
    const { title, foursquareVenueId, lat, lon } = inputValue;
    const data = {
      title,
      foursquareVenueId,
      lat,
      lon,
    };

    if (!shouldUpdateMarket) {
      fetch("/api/markets", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
    } else {
      fetch(`/api/markets/${marketId}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
    }

    this.setState({
      inputValue: {
        title: "",
        foursquareVenueId: "",
        lat: "",
        lon: "",
      },
    });
  }

  // Filter locations
  // Code Reference: Building A Search Filter-https://www.youtube.com/watch?v=OlVkYnVXPl0
  getFilteredLocations() {
    return this.state.locations.filter((location) => {
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
      displayLocationList: false,
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
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            alert(`Sorry, can't get information from Foursquare...`);
            throw new Error(`Sorry, can't get information from Foursquare...`);
          }
        })
        .then((obj) => {
          this.setState({ clickedLocationLikes: obj.response.likes.count });
        })
        //Manage error when data is retrieved from Foursquare
        .catch((error) => {
          alert(
            `Sorry, can't get information from Foursquare due to error ${error}`
          );
          console.log(`Info didn't load due to error: ${error}`);
        });
    }
  }

  deleteLocation(location) {
    const allMarkets = this.state.locations;
    this.setState((prev) => ({
      locations: prev.locations.filter((item) => item !== location),
    }));

    fetch(`/api/markets/${location.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.status !== 200) {
          this.setState({
            locations: allMarkets,
          });
        }
      })
      .catch((error) => {
        this.setState({
          locations: allMarkets,
        });
      });
  }

  editLocation(location) {
    const { id, title, venueId, position } = location;

    this.setState({
      isAddMarketDisplayed: true,
      shouldUpdateMarket: true,
      marketId: id,
      inputValue: {
        title,
        foursquareVenueId: venueId,
        lat: position.lat,
        lon: position.lng,
      },
    });
  }

  render() {
    const {
      displayLocationList,
      query,
      clickedLocationLikes,
      clickedLocation,
      isAddMarketDisplayed,
      inputValue,
      shouldUpdateMarket,
    } = this.state;
    return (
      <div className="App">
        <Header
          toggleMenuBtn={this.toggleMenuBtn.bind(this)}
          toggleAddMarketBtn={this.toggleAddMarketBtn.bind(this)}
        />
        {isAddMarketDisplayed && (
          <NewMarketForm
            toggleAddMarketBtn={this.toggleAddMarketBtn.bind(this)}
            inputValue={inputValue}
            handleOnChange={this.handleOnChange.bind(this)}
            handleSubmit={this.handleSubmit.bind(this)}
            submitText={shouldUpdateMarket ? "Update" : "Save"}
          ></NewMarketForm>
        )}
        <LocationList
          whenLocationIsClicked={this.selectLocation.bind(this)}
          isDisplayed={displayLocationList}
          locations={this.getFilteredLocations()}
          whenUpdateQuery={this.updateQuery.bind(this)}
          query={query}
          handleDeleteLocation={this.deleteLocation.bind(this)}
          handleEditLocation={this.editLocation.bind(this)}
        />
        {!navigator.onLine && (
          <h1>
            Ops! Something went wrong. Check your connection and try again.
          </h1>
        )}
        <MyMap
          // Data of Likes came from Foursquare API
          clickedLocationLikes={clickedLocationLikes}
          whenMarkerIsClicked={this.selectLocation.bind(this)}
          clickedLocation={clickedLocation}
          locations={this.getFilteredLocations()}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAYb1WQLh2JaKpVrdZegH69tVAI2LH9gNs"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div
              style={{ height: `calc(100vh - 87px)` }}
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

export default Home;
