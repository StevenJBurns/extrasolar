/* React and Redux imports */
import React from 'react';
import store from "../redux/store";
import { changeAudioSource } from "../redux/actions";

/* Page specific imports */
import AudioHome from '../assets/audio/home.ogg';
// import { CanvasComponent } from '../components/CanvasComponent.jsx';

/* Style Imports */
import "../styles/PageHome.css";


export class PageHome extends React.Component {
  constructor(props) {
    super(props);
    this.handleResize = this.handleResize.bind(this);
  }

  render() {
    return (
      <main id="main-home">
        <div id="div-content-wrapper">
        
        </div>
        {/* <CanvasComponent /> */}
      </main>
    );
  }

  componentWillMount() {
    store.dispatch(changeAudioSource(AudioHome));
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
    // const height = document.getElementById('main-home').clientHeight;
    // const width = document.getElementById('main-home').clientWidth;
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
