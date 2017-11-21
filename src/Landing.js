import React, { Component } from 'react';
import Header from './Header';
import logo from './logo.svg';

const resume = require('./data/resume/JamesKuczmarskiResume.pdf');

class Landing extends Component {
  render() {
    return (
      <section class="content">
        <p> I am a <strong> Software Engineer </strong> and <strong> Photographer </strong> based in Buffalo, NY. </p>
        <p> When I'm not behind the keyboard implementing a new feature, fixing a bug, or trying to create the next big thing, there's a camera in my hand and I'm taking photos of everything around me. </p>
        <p> I'm also a big supporter of <strong> open source software</strong>. Most of my work is publicly avaliable on <a href="https://github.com/jbkuczma/" target="_blank">GitHub</a>. </p>
        <p> I currently attend the <a href="https://engineering.buffalo.edu/computer-science-engineering.html" target="_blank">State University of New York at Buffalo</a>, where I study Computer Science. </p>
        <p> Feel free to view my <a href={resume} target="_blank">resume</a> or send me an <a href="mailto:jbkuczma@buffalo.edu">e-mail</a> to get in touch. </p>
      </section>
    );
  }
}

export default Landing;
