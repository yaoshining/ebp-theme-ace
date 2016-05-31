import React from 'react';
import App from './app';
import Dashboard from './pages/dashboard';
import {Forms, FormsMenu} from './pages/forms';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

export default (
    <Router history={hashHistory}>
        <Route name="home" path="/" component={App}>
            <IndexRoute component={Dashboard} />
            <Route name="forms" path="forms" components={{sidemenu: FormsMenu, children: Forms}} />
        </Route>
    </Router>
)