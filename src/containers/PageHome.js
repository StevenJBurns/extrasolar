import React, { Component } from 'react';
import AudioHome from '../audio/home.ogg';

class PageHome extends Component {
  render() {
    console.log(this.props);

    return (
      <main>
        <h1>Home</h1>
        <audio autoPlay loop id="audioBackground" src={AudioHome} muted={this.props.isMuted}>
          <span>Your browser does not support the <code>audio</code> element.</span> 
        </audio>
      </main>
    );
  }
}

export default PageHome;

// src="audio/index.ogg