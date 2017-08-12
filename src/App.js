import React, { Component } from 'react';
import logo from './feed_logo.png';
import './App.css';
import Menu from './Menu';
import MenuItem from './SlideMenu';



export default class Main extends Component {
    render(){
        return(

            <div className="App">
                <Menu ref="right" alignment="right">
                    <MenuItem hash="first-page">First Page</MenuItem>
                    <MenuItem hash="second-page">Second Page</MenuItem>
                    <MenuItem hash="third-page">Third Page</MenuItem>
                </Menu>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>

                </div>
                <p className="App-intro">
                    <h1>Hello From Feed</h1>
                </p>
                <h3>ibraheeeeeeeeeeeem</h3>

            </div>



        );
    }
}

