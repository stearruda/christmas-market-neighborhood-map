import React, { Component } from "react";
import { Link } from "react-router-dom";

class LocationList extends Component {
  state = {};

  getLocationListContainers() {
    const {
      locations,
      isDisplayed,
      whenLocationIsClicked,
      handleDeleteLocation,
      handleEditLocation,
    } = this.props;
    const locationListContainers = locations.map((location) => (
      <div key={location.id} className="location-section__container">
        <li
          key={location.id}
          tabIndex={isDisplayed ? "0" : "1"}
          onClick={() => whenLocationIsClicked(location)}
        >
          {location.title}
        </li>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            type="button"
            className="btn-secondary btn--actions"
            onClick={() => {
              handleEditLocation(location);
            }}
          >
            <svg
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="20px"
              height="20px"
            >
              <path d="M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z" />
            </svg>
          </button>

          <button
            type="button"
            className="btn-secondary btn--actions"
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
                strokeMiterlimit="10"
                strokeWidth="2.08"
                d="M17,4.429C17,5.849,15.881,7,14.5,7h-3 C10.119,7,9,5.849,9,4.429V3.571C9,2.15,10.119,1,11.5,1h3C15.881,1,17,2.15,17,3.571V4.429z"
              />
              <path
                fill="none"
                stroke="#fff"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M21 23c0 1.104-.896 2-2 2H7c-1.104 0-2-.896-2-2V6h16V23zM17 10L17 22M13 10L13 22M9 10L9 22"
              />
              <path d="M23,6V5c0-0.551-0.449-1-1-1H4C3.449,4,3,4.449,3,5v1H2v2h2h18h2V6H23z" />
            </svg>
          </button>

          <Link
            to={`/markets/${location.id}`}
            className="btn-secondary btn--details btn--actions"
          >
            Market Details
          </Link>
        </div>
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
          <ul aria-label="Location List" className="location-list">
            {this.getLocationListContainers()}
          </ul>
        </div>
      );
    }
  }
}

export default LocationList;
