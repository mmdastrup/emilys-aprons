import React, { Component } from 'react';

export default class ApronItem extends Component {
    constructor(props) {
        super(props) 

    this.state = {
        this.aprons.active
    }
    this.changeActive = this.changeActive.bind(this);
    }

    changeActive() {
        this.setState({
          active: !this.state.active,
        });
    }

    render() {

        return (
            <div className="apron_items">
                <img src={this.props.pic} className="apron_pic"/>
                <h1 className="apron_title">{this.props.title}</h1>
                <p className="apron_description">{this.props.description}</p>
                <h4 className="apron_price">{this.props.price}</h4>
                { this.state.active ? <button onClick={changeActive()}>In Cart</button> : <button onClick={changeActive()}>Add to Cart</button>}
                {console.log(this.state.active)}

            </div>
            
        );
        
    }
}

