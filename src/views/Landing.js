import React, { Component } from 'react';

const resume = require('../data/resume/JamesKuczmarskiResume.pdf');

class Landing extends Component {
  render() {
    return (
      <section class="content">
        <p> I am a <strong> Software Engineer </strong> and <strong> Photographer </strong> based in Buffalo, NY.</p>
        <p> Currently working at: <a href="https://kangarootime.com/" target="_blank" rel="noopener noreferrer">Kangarootime</a>.</p>         
        <p> I graduated from the <a href="https://engineering.buffalo.edu/computer-science-engineering.html" target="_blank" rel="noopener noreferrer">State University of New York at Buffalo</a> where I received my Bachelor's in Computer Science. </p>
        <p> When I'm not behind the keyboard implementing a new feature, fixing a bug, or trying to create the next big thing, there's a camera in my hand and I'm taking photos of everything around me. </p>
        <p> I'm also a big supporter of <strong> open source software</strong>. Most of my work is publicly avaliable on <a href="https://github.com/jbkuczma/" target="_blank" rel="noopener noreferrer">GitHub</a>. </p>
        <p> Feel free to view my <a href={resume} target="_blank">resume</a> or send me an <a href="mailto:jbkuczma@buffalo.edu">e-mail</a> to get in touch. </p>
      </section>
    );
  }
}

export default Landing;
