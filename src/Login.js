import React, { Component } from 'react';
//import * as API from './api';

export default class Login extends React.Component{
    render(){
        if (this.props.user)
            return <div>
                <p>Hi{this.props.user.name}! </p>
                <p> <button onClick={this.signout}> Sign Out</button> </p>
            </div>;

    return <div className="App">
        <p> <input className='u-full-width' placeholder="username" ref='username' type="text"/> </p>
        <p> <input className='u-full-width' placeholder="password" ref='password' type="password"/> </p>

        <p> <button onClick={this.signin}> sign in</button> </p>

    </div>;
    }


}

