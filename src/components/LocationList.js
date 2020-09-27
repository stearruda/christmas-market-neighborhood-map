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
          className="btn-secondary btn--delete"
          onClick={() => {
            handleDeleteLocation(location);
          }}
        >
          <svg
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 26 26"
            width="20px"
            height="20px"
          >
            <path
              fill="none"
              stroke="#fff"
              stroke-miterlimit="10"
              stroke-width="2.08"
              d="M17,4.429C17,5.849,15.881,7,14.5,7h-3 C10.119,7,9,5.849,9,4.429V3.571C9,2.15,10.119,1,11.5,1h3C15.881,1,17,2.15,17,3.571V4.429z"
            />
            <path
              fill="none"
              stroke="#fff"
              stroke-miterlimit="10"
              stroke-width="2"
              d="M21 23c0 1.104-.896 2-2 2H7c-1.104 0-2-.896-2-2V6h16V23zM17 10L17 22M13 10L13 22M9 10L9 22"
            />
            <path d="M23,6V5c0-0.551-0.449-1-1-1H4C3.449,4,3,4.449,3,5v1H2v2h2h18h2V6H23z" />
          </svg>
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
