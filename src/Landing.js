import React, { Component } from 'react';
import Header from './Header';
import logo from './logo.svg';

class Landing extends Component {
  render() {
    return (
      <section class="content">
        <p> I am a Software Engineer and Photographer based in Buffalo, NY</p>
        <p> I'm also a big fan of <strong> open source software</strong>. Most of my work is publicly avaliable on <a href="https://github.com/jbkuczma/" target="_blank">GitHub</a>.</p>
        <p>I currently attend the <a href="#">State University of New York at Buffalo</a>, where I study Computer Science. </p>
      </section>
    );
  }
}

export default Landing;
