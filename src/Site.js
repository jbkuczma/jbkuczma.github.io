import React, { Component } from 'react';
import logo from './logo.svg';

class Site extends Component {
  render() {
    return (
      <div class="container">
        <header>
          <h1>Hey there. I'm <span id="name"> James Kuczmarski </span>.</h1>
          <ul>
            <li><a title="Resume" href="#"> Resume </a></li>
            <li><a title="Resume" href="https://github.com/jbkuczma/" target="_blank"> GitHub </a></li>
            <li><a title="Resume" href="#"> LinkedIn </a></li>
            <li><a title="Projects" href="#"> Projects </a></li>
            <li><a title="Photography" href="#"> Photography </a></li>
          </ul>
        </header>
        <section class="content">
          <p> I am a Software Engineer and Photographer based in Buffalo, NY</p>
          <p> I'm also a big fan of <strong> open source software</strong>. Most of my work is publicly avaliable on <a href="https://github.com/jbkuczma/" target="_blank">GitHub</a>.</p>
          <p>I currently attend the <a href="#">State University of New York at Buffalo</a>, where I study Computer Science. </p>
        </section>
		  </div>
    );
  }
}

export default Site;
