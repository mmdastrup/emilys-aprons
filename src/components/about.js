import React, { Component } from 'react';
import Navbar from './navbar';

export default class About extends Component {
    render() {
        return (
            <div className="about-wrapper">
                <Navbar/>
                <div className="info">
                    <div className="information">
                        <h1>About us</h1>
                        <p>Emily's Aprons makes high quality Aprons out of only the best fabrics and materials. Choose us for perfect design, look, and functionality.</p>
                        <h1>Contact Us</h1>
                        <p>Phone: 800-555-3518</p>
                        <p>Email: emilysaprons@gmail.com</p>
                        <p>Fax: 888-555-1681</p>
                        <h1>Love your apron? Leave us a review!</h1>
                        <div className="about-icons">
                            <div className="insta">
                                <i className="fab fa-instagram"></i>
                            </div>
                            <div className="facebook">
                                <i className="fab fa-facebook"></i>
                            </div>
                            <div className="snap">
                                <i className="fab fa-snapchat"></i>
                            </div>
                            <div className="twitter">
                                <i className="fab fa-twitter"></i>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}