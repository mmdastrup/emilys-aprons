import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1>Emily's Aprons Summer Sale!!</h1>
                <p>Start your summer off right with 40% off an apron of your choice</p>
                <img src="https://www.fermliving.com/Admin/Public/getimage.ashx?Image=/files/Billeder/packshots/5535_2.jpg&Compression=100&Width=600&&Height=800&Crop=0" className="homepic"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ22FyBbAweaV1n968DilIfNXZNHPC05tyh9fj4r2mhwHgdN35vww" className="homepic"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7TWIYEa5TWcfoQnw5GOXUpZQOKX6WS_18TushCT6yfD3XQrPuIg" className="homepic"/>

            </div>
        );
    }
}

export default HomePage;