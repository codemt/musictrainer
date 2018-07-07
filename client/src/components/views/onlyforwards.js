import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../stylesheets/youtube-video.css';
import $ from 'jquery';

 class OnlyForwards extends Component {
    

  render() {
    return (
      <div>
      <div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/HzHmJCXsSf0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>
      </div>
    )
  }
}

export default OnlyForwards;