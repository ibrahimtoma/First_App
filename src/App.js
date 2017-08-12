import React, { Component } from 'react';
import logo from './feed_logo.png';
import './App.css';
import Menu from './Menu';
import MenuItem from './SlideMenu';



export default class Main extends Component {
    render(){
        return(

            <div className="App">

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

