import React, { Component } from 'react';
import Navbar from './navbar';


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <h1>This is the app component</h1>
      </div>
    );
  }
}
