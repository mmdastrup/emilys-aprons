import React, { Component } from 'react';
import Navbar from './navbar';

export default class About extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <h1>This is the about page</h1>
                <p>Emily's Aprons makes high quality Aprons out of only the best fabrics and materials. Choose us for perfect design, look, and functionality.</p>
                <h1>Contact Us</h1>
                <p>Phone: 800-555-3518</p>
                <p>Email: emilysaprons@gmail.com</p>
                <p>Fax: 888-555-1681</p>
            </div>
        );
    }
}