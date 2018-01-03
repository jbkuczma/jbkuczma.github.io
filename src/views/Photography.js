import React, { Component } from 'react';
import photos from '../data/photos';

class Photography extends Component {
  render() {
    return (
      <section class="content">
        <p> You can view more of my photos on <a href="https://www.instagram.com/james.visual/" target="_blank" alt="instagram"> Instagram </a> and <a href="https://500px.com/jamesvisual" target="_blank" alt="500px"> 500px</a>.</p>        
        {photos.map(photo => {
          return (
            <div class="photo-container" key={ photo.id }>
              <img src={ photo.src } alt="image" class="photo" />
            </div>
          )
        })}
      </section>
    );
  }
}

export default Photography;
