import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Link } from 'react-router';
import { LoginLink } from 'react-stormpath';
import DocumentTitle from 'react-document-title';
export MasterPage from './index';
export LoginPage from './SlideMenu';

ReactDOM.render(
    <Route path='/' component={MasterPage}>
        <Route path='/' component={MasterPage}>
            <IndexRoute component={IndexPage} />
        </Route>
        <Route path='/hello' component={HelloPage} />
    </Route>,
    <LoginRoute path='/login' component={LoginPage} />,
    <App />,
  document.getElementById('root'),
);
