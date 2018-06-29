if (module.hot) {
  module.hot.accept();
}

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import "babel-polyfill";

import App from './App.jsx';
import store from './store';


ReactDOM.render(
  <Provider store= { store }>
    <App />
  </Provider>

  ,document.getElementById('app')
);