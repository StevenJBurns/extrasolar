import React, { Component } from 'react';
import AudioData from '../audio/data.ogg';

class PageData extends Component {
  render() {
    console.log(this.props);

    return (
      <main>
        <h1>Data</h1>
        <audio autoPlay loop id="audioBackground" src={AudioData} muted={this.props.isMuted}>
          <span>Your browser does not support the <code>audio</code> element.</span> 
        </audio>
      </main>
    );
  }
}

export default PageData;