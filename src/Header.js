import React, { Component } from 'react';
import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Site from './Site';
import Landing from './Landing';
import Photograhy from './Photography';
import Projects from './Projects';

class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <h1><Link to="/">Hey there. I'm <span id="name"> James Kuczmarski </span>.</Link></h1>
            <ul>
              <li><Link to="/projects"> Projects </Link></li>
              <li><Link to="/photography"> Photography </Link></li>
              <li><a title="GitHub" href="https://github.com/jbkuczma/" target="_blank"> GitHub </a></li>
              <li><a title="LinkedIn" href="#"> LinkedIn </a></li>
            </ul>
          </header>
          
          <Route exact path="/" component={Landing}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/photography" component={Photograhy}/>  
        </div>      
      </Router>
    );
  }
}

export default Header;
