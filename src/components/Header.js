import React, { Component } from "react";

class Header extends Component {
  state = {};

  render() {
    const { toggleMenuBtn, toggleAddMarketBtn } = this.props;
    return (
      <header role="banner" tabIndex="0">
        <h1 tabIndex="0">Christmas Market</h1>

        <div
          tabIndex="0"
          className="menuBtn"
          aria-label="Toggle form to add market"
          onClick={(e) => toggleAddMarketBtn(e)}
        >
          Add Market
        </div>

        <div
          tabIndex="0"
          className="menuBtn"
          aria-label="Toggle Menu of Locations"
          onClick={(e) => toggleMenuBtn(e)}
        >
          Menu
        </div>
      </header>
    );
  }
}

export default Header;
