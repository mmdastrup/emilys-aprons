import React, { Component } from 'react';
import { connect } from "react-redux";

import * as actions from '../actions';

class ShoppingItem extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            // getState()
        }

        this.changeActive = this.changeActive.bind(this);
    }

    changeActive() {
        this.props.setItemActive(this.props._id);
    }

    render() {

        return (
            <div className="shopping_items">
                <div className="products">
                    <img src={this.props.pic} className="shopping_pic"/>
                    <h1 className="shopping_title">{this.props.title}</h1>
                    <p className="shopping_description">{this.props.description}</p>
                    <p className="shopping_type">{this.props.type}</p>
                    <h4 className="shopping_price">{this.props.price}</h4>
                    <i onClick={this.changeActive} className="fas fa-times" id="x"></i>
                </div>
            </div>
            
        );
        
    }
}

ShoppingItem = connect(null, actions)(ShoppingItem);

export default ShoppingItem;