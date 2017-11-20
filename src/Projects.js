import React, { Component } from 'react';
import logo from './logo.svg';

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 1,
          name: 'NBAreact',
          description: 'NBA app for iOS and Android. 60+ stars and 20+ forks on GitHub',
          tech: 'JavaScript | React Native',
          url: 'https://github.com/jbkuczma/NBAreact',
          github_name: 'jbkuczma/NBAreact'
        },
        {
          id: 2,
          name: 'Moose',
          description: 'Web app for easily streaming music in a group (Senior Project)',
          tech: 'NodeJS',
          url: 'https://github.com/jbkuczma/Moose',
          github_name: 'jbkuczma/Moose'
        },
        {
          id: 3,
          name: 'Moose Mobile',
          description: 'Mobile app for Moose - stream music effortlessly with others (In development)',
          tech: 'JavaScript | React Native'
        },
        {
          id: 4,
          name: 'NBAshotchart',
          description: 'Visualizer for shots taken by NBA players throughout a season',
          tech: 'Python | Flask',
          url: 'https://github.com/jbkuczma/NBAshotchart',
          github_name: 'jbkuczma/NBAshotchart'
        }
      ]
    }
  }


  render() {
    return (
      <section class="content projects">
        {this.state.projects.map(project => {
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
