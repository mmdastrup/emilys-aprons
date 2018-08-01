import React, { Component } from 'react';
import Navbar from './navbar';

export default class About extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <p>This is the about page</p>
            </div>
        );
    }
}