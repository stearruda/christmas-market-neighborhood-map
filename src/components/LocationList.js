import React, { Component } from "react";

class LocationList extends Component {
  state = {};

  getLocationListContainers() {
    const {
      locations,
      isDisplayed,
      whenLocationIsClicked,
      handleDeleteLocation,
    } = this.props;
    const locationListContainers = locations.map((location) => (
      <div>
        <li
          key={location.id}
          tabIndex={isDisplayed ? "0" : "1"}
          onClick={() => whenLocationIsClicked(location)}
        >
          {location.title}
        </li>
        <button
          type="button"
          onClick={() => {
            handleDeleteLocation(location);
          }}
        >
          Delete
        </button>
      </div>
    ));
    return locationListContainers;
  }

  render() {
    const { isDisplayed, query, whenUpdateQuery } = this.props;

    if (!isDisplayed) {
      return null;
    } else {
      return (
        <div className="location-section">
          <input
            type="text"
            aria-label="Filter location by name"
            tabIndex="0"
            className="input-search"
            placeholder="Search"
            value={query}
            onChange={(e) => whenUpdateQuery(e.target.value)}
          />
          <ul aria-label="Location List">{this.getLocationListContainers()}</ul>
        </div>
      );
    }
  }
}

export default LocationList;
