import React, { Component } from 'react';
import CanvasHome from '../components/IntroCanvas';
import AudioHome from '../audio/home.ogg';

class PageHome extends Component {
  constructor(props) {
    super(props);

    this.handleResize = this.handleResize.bind(this);
  }

  render() {
    return (
      <main id="main-home">
        <CanvasHome />
        <audio autoPlay loop id="audioBackground" src={AudioHome} muted={this.props.isMuted}>
          <span>Your browser does not support the <code>audio</code> element.</span> 
        </audio>
      </main>
    );
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
    const height = document.getElementById('main-home').clientHeight;
    const width = document.getElementById('main-home').clientWidth;    
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({
      windowHeight: document.getElementById('main-home').clientHeight,
      windowWidth: document.getElementById('main-home').clientWidth
    });    
  }
}

export default PageHome;
