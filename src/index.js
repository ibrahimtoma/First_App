import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Menu from './Menu'
import MenuItem from './SlideMenu';


ReactDOM.render(
    <Menu ref="right" alignment="right">
        <MenuItem hash="first-page">First Page</MenuItem>
        <MenuItem hash="second-page">Second Page</MenuItem>
        <MenuItem hash="third-page">Third Page</MenuItem>
    </Menu>,
    <App />,

  document.getElementById('root'),
);
