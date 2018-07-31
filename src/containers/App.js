import React, { Component } from 'react';
import Header from '../components/Header';
import MyMap from '../components/MyMap';
import LocationList from '../components/LocationList';
import './App.css';

class App extends Component {
	state = {
		displayLocationList: true
	}

	toggleMenuBtn() {
		this.setState(prevState => ({
			displayLocationList: !prevState.displayLocationList
		}))
		console.log('toggled')
	}

  render() {
    return (
      <div className='App'>
        <Header 
        	toggleMenuBtn = {this.toggleMenuBtn.bind(this)}
        />
        <LocationList
     			display = {this.state.displayLocationList}
        />
        <MyMap />
      </div>
    );
  }
}

export default App;
