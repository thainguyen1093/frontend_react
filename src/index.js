import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/store'

import App from './App'
import './fontawesome';

import 'bootstrap/dist/css/bootstrap.css';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import 'react-toastify/dist/ReactToastify.css';

const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
)