import React, { Component } from 'react';

class PageHome extends Component {
  render() {
    return (
      <main>
        <h1>Home</h1>
        <audio autoplay loop id="audioBackground" >Your browser does not support the <code>audio</code> element.</audio> 
      </main>
    );
  }
}

export default PageHome;

// src="audio/index.ogg