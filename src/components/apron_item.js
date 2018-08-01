import React, { Component } from 'react';

export default class ApronItem extends Component {
    constructor(props) {
        super(props) 
    }
    
    render() {
        return (
            <div className="apron_list">
                <h1 className="apron_title">{this.props.title}</h1>
                <p className="apron_description">{this.props.description}</p>
                <img src={this.props.pic} className="apron_pic"/>
            </div>
        );
    }
}