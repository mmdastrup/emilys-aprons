import React, { Component } from 'react';
import Navbar from './navbar';
import HomePage from './homepage';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <HomePage/>
      </div>
    );
  }
}
