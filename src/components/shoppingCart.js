import React, { Component } from 'react';
import Navbar from './navbar';

import ShoppingItem from './shoppingCart_item';

import { connect } from 'react-redux';

class ShoppingCart extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="shoppingCart-wrapper">
                <Navbar/>
                <div className="shopping-header">
                    <h1>Here are the items in your cart</h1>
                </div>
                {
 
                    this.props.aprons.map(apron => {
                        if(apron.active) {
                            return <ShoppingItem key={apron._id} {...apron} />;
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