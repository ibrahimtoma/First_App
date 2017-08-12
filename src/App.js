import React, { Component } from 'react';
import logo from './feed_logo.png';
import './App.css';
import Header from './Header';
import { Link } from 'react-router';
import { LoginLink } from 'react-stormpath';
import DocumentTitle from 'react-document-title';
import MasterPage from './index';
export LoginPage from './SlideMenu';
import bar from './bar';

bar();


export default class Main extends Component {
    render(){
        return(

            <div className="App">

                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <DocumentTitle title='My React App'>
                        <div className='MasterPage'>
                            <Header />
                            { this.props.children }
                            <Route path='/' component={MasterPage}>
                                <LoginRoute path='/login' component={LoginPage} />
                                <Route path='/hello' component={HelloPage} />
                            </Route>
                        </div>
                    </DocumentTitle>
                </div>
                <p className="App-intro">
                    <h1>Hello From Feed</h1>
                </p>
                <h3>ibraheeeeeeeeeeeem</h3>

            </div>



        );
    }
}

