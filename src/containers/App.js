import React, { Component } from 'react';
import Header from '../components/Header';
import MyMap from '../components/MyMap';
import LocationList from '../components/LocationList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <LocationList />
        <MyMap />
      </div>
    );
  }
}

export default App;
