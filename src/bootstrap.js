import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import App from './components/app';
import About from './components/about';
import Browse from './components/browse';
import ShoppingCart from './components/shoppingCart';
import InfantsBrowse from './components/infantsBrowse';
import ToddlersBrowse from './components/toddlersBrowse';
import KidsBrowse from './components/kidsBrowse';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/browse" component={Browse} />
          <Route exact path="/about" component={About} />
          <Route exact path="/shoppingCart" component={ShoppingCart} />
          <Route exact path="/infantsBrowse" component={InfantsBrowse} />
          <Route exact path="/toddlersBrowse" component={ToddlersBrowse} />
          <Route exact path="/kidsBrowse" component={KidsBrowse} />

        </Switch>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
