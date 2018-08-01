import React, { Component } from 'react';
import Navbar from './navbar';
import ApronItem from './apron_item';

class Browse extends Component {
    render() {
        this.aprons = [
            {_id:0, title: "name", pic: "#", description: "Description goes here"},
            {_id:1, title: "name", pic: "#", description: "Description goes here"},
            {_id:2, title: "name", pic: "#", description: "Description goes here"}
        ]
        return (
            <div>
            <Navbar/>
            <h1>This is where the aprons will render</h1>
            {console.log("apron rendered")}
            {
                this.aprons.map(apron => {
                    return (
                      <ApronItem key={apron._id} {...apron} />
                    )
                })
              }
            </div>
        );
    }
}

export default Browse;