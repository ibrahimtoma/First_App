import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Menu from './Menu';
import MenuItem from './SlideMenu';
import Login from "./Login";

ReactDOM.render(
    <div>
        <Menu ref="right" alignment="right" >

        </Menu>,
        <App />
        <Login />
    </div>,
            document.getElementById('root'),

    );


