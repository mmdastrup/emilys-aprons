import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
        <div className="navbar">
            <a href="#" className="toggle" id="navHamburger">
                <i className="fas fa-bars"></i>
            </a>
            <Link to="/" className="brand">Emily's Aprons</Link>
            <div className="left">
                <Link to="/browse" className="link">Browse All</Link>
                <Link to="/about" className="link">About Us</Link>
            </div>
            <div className="right">
                <Link to="/shoppingCart" className="link">Shopping Cart</Link>
            </div>
        </div>
        );
    }
}