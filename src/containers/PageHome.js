import React, { Component } from 'react';
import CanvasHome from '../components/IntroCanvas';
import AudioHome from '../audio/home.ogg';

class PageHome extends Component {
  render() {
    return (
      <main>
        <CanvasHome />
        <audio autoPlay loop id="audioBackground" src={AudioHome} muted={this.props.isMuted}>
          <span>Your browser does not support the <code>audio</code> element.</span> 
        </audio>
      </main>
    );
  }
}

export default PageHome;
