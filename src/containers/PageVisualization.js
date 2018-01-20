import React, { Component } from 'react';
import AudioVisualization from '../audio/visualization.ogg';

class PageVisualization extends Component {
  render() {
    console.log(this.props);

    return (
      <main>
        <h1>Visualization</h1>
        <audio autoPlay loop id="audioBackground" src={AudioVisualization} muted={this.props.isMuted}>
          <span>Your browser does not support the <code>audio</code> element.</span> 
        </audio>
      </main>
    );
  }
}

export default PageVisualization;