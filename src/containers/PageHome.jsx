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
          <h1>ExtraSolar</h1>
          <hr></hr>
          <p>Since 1992, over 3,500 <a href="https://en.wikipedia.org/wiki/Exoplanet">extrasolar planets</a> have been observed through various means. Less than two dozen have been <a href="https://en.wikipedia.org/wiki/List_of_directly_imaged_exoplanets">directly imaged</a> but several thousand more have been catalogued by non-visual means and data.</p>
          <p>The extrasolar data in this project comes directly from NASA and IPAC at Caltech.  </p>
          <p>A majority of the data comes from the <a href="https://en.wikipedia.org/wiki/Kepler_(spacecraft)">Kepler and K2</a> missions since the Kepler Space Observatory was launched in 2009. NASA maintains a list of over 5,000 potential stellar candidates for future observations.</p>
          <p>Scientists estimate there are roughly 100 billion exoplanets in our galaxy alone. Further extrapolation predicts there are 10 billion earth size planets and of those 1 billion may be in its host star's <a href="https://en.wikipedia.org/wiki/Circumstellar_habitable_zone">habitable zone</a></p>
          <p>For now, come browse my project to see visual plots of the solar systems with valid data... </p>
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
