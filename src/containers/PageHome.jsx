/* React and Redux imports */
import React, { Component } from 'react';
import store from "../redux/store";
import { changeAudioSource } from "../redux/actions";

/* Page specific imports */
import AudioHome from '../assets/audio/home.ogg';
import CanvasHome from '../components/IntroCanvas';


class PageHome extends Component {
  constructor(props) {
    super(props);

    this.handleResize = this.handleResize.bind(this);
  }

  render() {
    return (
      <main id="main-home">
        <CanvasHome />
      </main>
    );
  }

  componentWillMount() {
    store.dispatch(changeAudioSource(AudioHome));
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
