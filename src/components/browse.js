import React, { Component } from "react";
import Navbar from "./navbar";
import ApronItem from "./apron_item";

import * as actions from '../actions';
import { connect } from 'react-redux';

class Browse extends Component {

  componentDidMount() {
    this.props.fetchAprons();
  }

  render() {
  
    return (
      <div>
        <Navbar />
        <div className="browse-heading">
          <h1>Browse All</h1>
        </div>
        <div className="apron_list">
          {
 
            this.props.aprons.map(apron => {
              return <ApronItem key={apron._id} {...apron} />;
            })
            
          }
        </div>
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

Browse = connect(mapStateToProps, actions)(Browse);

export default Browse;
