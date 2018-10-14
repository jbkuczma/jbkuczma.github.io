import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Landing from './views/Landing';
import Photograhy from './views/Photography';
import Projects from './views/Projects';

const resume = require('./data/resume/JamesKuczmarskiResume.pdf');
const codeSVG = require('./code.svg');
const cameraSVG = require('./camera.svg');

class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <img src={codeSVG} id="code_svg" alt="code"/>
            <img src={cameraSVG} id="camera_svg" alt="camera" />                              
            <h1><Link to="/">Hey there. I'm <span id="name"> James Kuczmarski</span>.</Link></h1>
            <ul>
              <li><a href={resume} target="_blank"> Resume </a></li>
              <li><Link to="/projects"> Projects </Link></li>
              <li><Link to="/photography"> Photography </Link></li>
              <li><a title="GitHub" href="https://github.com/jbkuczma/" target="_blank" rel="noopener noreferrer"> GitHub </a></li>
              <li><a title="LinkedIn" href="https://www.linkedin.com/in/james-kuczmarski" target="_blank" rel="noopener noreferrer"> LinkedIn </a></li>
            </ul>
          </header>

          <Route exact path="/" component={Landing} />
          <Route path="/projects" component={Projects} />
          <Route path="/photography" component={Photograhy} />  
        </div>      
      </Router>
    );
  }
}

export default Header;
