import React, { Component } from 'react';
import logo from './logo.svg';

import projects from './data/projects';

class Projects extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <section class="content projects">
        {projects.map(project => {
          return (
            <div class="project" key={ project.id }>
              <p class="project--name">{ project.name } ({ project.tech }) <a class="project--link" href={ project.url } target="_blank">{ project.github_name }</a></p>
              <p class="project--description">{ project.description }</p>
            </div>
          )
        })}
      </section>
    );
  }
}

export default Projects;
