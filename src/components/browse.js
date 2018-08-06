import React, { Component } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import ApronItem from "./apron_item";

class Browse extends Component {
  render() {
    this.aprons = [
      {
        _id: 0,
        title: "black apron",
        pic:
          "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/787_XXX_v1.tif&wid=650&cvt=jpeg",
        description: "Description goes here",
        price: "$$"
      },
      {
        _id: 1,
        title: "black apron",
        pic:
          "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/787_XXX_v1.tif&wid=650&cvt=jpeg",
        description: "Description goes here",
        price: "$$"
      },
      {
        _id: 2,
        title: "black",
        pic:
          "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/787_XXX_v1.tif&wid=650&cvt=jpeg",
        description: "Description goes here",
        price: "$$"
      },
      {
        _id: 3,
        title: "black",
        pic:
          "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/787_XXX_v1.tif&wid=650&cvt=jpeg",
        description: "description goes here",
        price: "$$"
      },
      {
        _id: 4,
        title: "black",
        pic:
          "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/787_XXX_v1.tif&wid=650&cvt=jpeg",
        description: "Description goes here",
        price: "$$"
      },
      {
        _id: 5,
        title: "black",
        pic:
          "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/787_XXX_v1.tif&wid=650&cvt=jpeg",
        description: "Description goes here",
        price: "$$"
      },
      {
        _id: 6,
        title: "black",
        pic:
          "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/787_XXX_v1.tif&wid=650&cvt=jpeg",
        description: "Description goes here",
        price: "$$"
      },
      {
        _id: 7,
        title: "black",
        pic:
          "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/787_XXX_v1.tif&wid=650&cvt=jpeg",
        description: "Description goes here",
        price: "$$"
      },
      {
        _id: 8,
        title: "black",
        pic:
          "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/787_XXX_v1.tif&wid=650&cvt=jpeg",
        description: "Description goes here",
        price: "$$"
      },

    ];
    return (
      <div>
        <Navbar />
        <Sidebar/>
        <div className="apron_list">
          {this.aprons.map(apron => {
            return <ApronItem key={apron._id} {...apron} />;
          })}
        </div>
      </div>
    );
  }
}

export default Browse;
