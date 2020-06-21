import React, { Component } from "react";

class NewMarketForm extends Component {
  state = {};

  render() {
    const {
      toggleAddMarketBtn,
      inputValue,
      handleOnChange,
      handleSubmit,
    } = this.props;
    return (
      <div>
        <form
          style={{ display: "flex", alignItems: "center", padding: "15px" }}
          onSubmit={handleSubmit}
        >
          <label for="title">Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={inputValue}
            onChange={(e) => handleOnChange(e)}
          />

          <label for="foursquareVenueId">Foursquare Venue Id:</label>
          <input
            type="text"
            name="foursquareVenueId"
            placeholder="Foursquare Venue Id"
            value={inputValue}
            onChange={(e) => handleOnChange(e)}
          />

          <label for="lat">Latitude:</label>
          <input
            type="text"
            name="lat"
            placeholder="Latitude"
            value={inputValue}
            onChange={(e) => handleOnChange(e)}
          />

          <label for="lon">Longitude:</label>
          <input
            type="text"
            name="lon"
            placeholder="Longitude"
            value={inputValue}
            onChange={(e) => handleOnChange(e)}
          />

          <button type="submit" className="menuBtn">
            Save
          </button>

          <button
            type="reset"
            className="menuBtn"
            onClick={(e) => toggleAddMarketBtn(e)}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default NewMarketForm;
