import React, { Component } from 'react';
import Header from '../components/Header.js';
import MyMap from '../components/MyMap.js';
import LocationList from '../components/LocationList.js';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LocationList />
        <MyMap />
      </div>
    );
  }
}

export default App;
