import React, { Component } from 'react';
import Navbar from './navbar';

import ApronItem from './apron_item';

import { connect } from 'react-redux';

class ShoppingCart extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="shoppingCart-wrapper">
                <Navbar/>
                {
 
                    this.props.aprons.map(apron => {
                        if(apron.active) {
                            return <ApronItem key={apron._id} {...apron} />;
                        }
                    })  
                }
                {console.log("Apron price here")}
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { aprons } = state.products;
    return {
        aprons
    }
}
  
ShoppingCart = connect(mapStateToProps)(ShoppingCart);

export default ShoppingCart;