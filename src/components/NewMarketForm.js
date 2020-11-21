import React, { Component } from "react";

class NewMarketForm extends Component {
  state = {};

  render() {
    const {
      toggleAddMarketBtn,
      inputValue,
      handleOnChange,
      handleSubmit,
      submitText,
    } = this.props;
    return (
      <div>
        <form className="add-market" onSubmit={handleSubmit}>
          <label for="title">Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={inputValue.title}
            onChange={(e) => handleOnChange(e)}
          />

          <label for="foursquareVenueId">Foursquare Venue Id:</label>
          <input
            type="text"
            name="foursquareVenueId"
            placeholder="Foursquare Venue Id"
            value={inputValue.foursquareVenueId}
            onChange={(e) => handleOnChange(e)}
          />

          <label for="lat">Latitude:</label>
          <input
            type="text"
            name="lat"
            placeholder="Latitude"
            value={inputValue.lat}
            onChange={(e) => handleOnChange(e)}
          />

          <label for="lon">Longitude:</label>
          <input
            type="text"
            name="lon"
            placeholder="Longitude"
            value={inputValue.lon}
            onChange={(e) => handleOnChange(e)}
          />

          <div className="add-market__btn-container">
            <button
              type="reset"
              className="btn-secondary"
              onClick={(e) => toggleAddMarketBtn(e)}
            >
              Cancel
            </button>

            <button type="submit" className="menuBtn">
              {submitText}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewMarketForm;
