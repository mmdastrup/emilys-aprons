import React, { Component } from 'react';
import Navbar from './navbar';

export default class ShoppingCart extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="shoppingCart-wrapper">
                <Navbar/>
                //render selected apron items here
            </div>
        );
    }
}

