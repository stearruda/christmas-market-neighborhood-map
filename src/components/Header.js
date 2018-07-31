import React, { Component } from 'react';


class Header extends Component {
  state = {
    displayLocationList: true
  }

  clickEvent() {
    this.props.toggleMenuBtn()
  }

  render() {
    return (
      <div>
      	<header>
      		<h1>Christmas Market</h1>
      		<div 
            className='menuBtn'
            onClick={(e) => this.clickEvent(e)}
          >Menu</div>
      	</header>
      </div>
    );
  }
}

export default Header;
