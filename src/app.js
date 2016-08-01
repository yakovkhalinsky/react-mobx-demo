import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './css/bootswatch-flatly.css';
import './css/styles.css';

import App from './js/components/app/App';

import DataStore from './js/data/Store';

ReactDOM.render(
    <App store={DataStore}/>,
    document.getElementById('root')
);
