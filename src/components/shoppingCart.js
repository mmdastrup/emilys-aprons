import React, { Component } from 'react';
import Navbar from './navbar';


export default class ShoppingCart extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <p>This is the shopping cart page</p>
            </div>
        );
    }
}

