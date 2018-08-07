import React, { Component } from 'react';


class Header extends Component {
  state = {}

  render() {
    return (
      <div>
      	<header 
          role='banner'
          tabIndex='0'
        >
      		<h1 tabIndex='0'>Christmas Market</h1>
      		<div 
            tabIndex='0'
            className='menuBtn'
            aria-label='Toggle Menu of Locations'
            onClick={(e) => this.props.toggleMenuBtn(e)}
          >Menu</div>
      	</header>
      </div>
    );
  }
}

export default Header;
