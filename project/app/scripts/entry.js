import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory, Route} from 'react-router';
import Document from './components/Document';
import Modal from './components/modal'

let router =(
  <Router history={hashHistory}>
  <Route path="/" component={Document}>
    <Route path ="/confirm" component = {Modal}/>
  </Route>

  </Router>
)


ReactDOM.render(router,document.getElementById('container'))
