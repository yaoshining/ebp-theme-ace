import '../assets/styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import routes from './index.routes';
import App from './app';

$(function() {
    document.body.appendChild(App.element);
    ReactDOM.render(routes, App.element);
});