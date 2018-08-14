import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (
            <div className="body">
                <div className="wrapper">
                    <div className="text">
                        <div className="heading">
                            <h1>Emily's Aprons Summer Sale!!</h1>
                        </div>
                        <div className="subheading">
                            <p>Start your summer off right with 40% off an apron of your choice</p>
                        </div>
                    </div>
                    <div className="pictures">
                            <div className="leftside">
                                <img src="/assets/child-apron-7.jpg" className="sidepicture" id="left-pic"/>
                            </div>
                            <img src="https://www.fermliving.com/Admin/Public/getimage.ashx?Image=/files/Billeder/packshots/5535_2.jpg&Compression=100&Width=600&&Height=800&Crop=0" className="homepic bigpic"/>
                            <div className="rightside">
                                <img src="/assets/child-apron-7.jpg" className="sidepicture" id="right-pic"/>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;