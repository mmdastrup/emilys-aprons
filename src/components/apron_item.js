import React, { Component } from 'react';
import { connect } from "react-redux";

import * as actions from '../actions';

class ApronItem extends Component {
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
            <div className="apron_items">
                <img src={this.props.pic} className="apron_pic"/>
                <h1 className="apron_title">{this.props.title}</h1>
                <p className="apron_description">{this.props.description}</p>
                <p className="apron_type">{this.props.type}</p>
                <h4 className="apron_price">{this.props.price}</h4>
                { this.props.active ? <button className="selected-button" onClick={this.changeActive}>Remove From Cart</button>: <button className="button" onClick={this.changeActive}>Add to Cart</button>}
                {console.log(this.state.active)}

            </div>
            
        );
        
    }
}

ApronItem = connect(null, actions)(ApronItem);

export default ApronItem;