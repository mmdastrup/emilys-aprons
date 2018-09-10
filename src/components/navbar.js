import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <a href="#" className="toggle" id="navHamburger">
          <i className="fas fa-bars" />
        </a>
        <Link to="/" className="brand">
          Emily's Aprons
        </Link>
        <div className="left">
        <Dropdown/>
          <Link to="/about" className="link" id="about">
            About Us
          </Link>
        </div>
        <div className="right">
          <Link to="/shoppingCart" className="link">
            Shopping Cart
          </Link>
        </div>
    </div>
    );
  }
}


export class Dropdown extends Component {
    render() {
        return (
            <div className="dropdown">
                <div className="dropdown-content">
                    <Link to="/browse" className="dropdown-links" id="browse-link">Browse</Link>
                    <Link to="/infantsBrowse" className="dropdown-links">Infants</Link>
                    <Link to="/toddlersBrowse" className="dropdown-links">Toddlers</Link>
                    <Link to="/kidsBrowse" className="dropdown-links">Kids</Link>
                </div>
            </div>
        );
    }
}