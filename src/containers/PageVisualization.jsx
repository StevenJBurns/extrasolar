/* React and Redux imports */
import React from 'react';
import store from "../redux/store";
import { changeAudioSource } from "../redux/actions";

/* Style Imports */
import "../styles/PageVisualization.css";

/* Page specific imports */
import AudioVisualization from '../assets/audio/visualization.ogg';


export class PageVisualization extends React.Component {
  render() {
    return (
      <main id="main-visualization">
        <h1>Visualization</h1>
      </main>
    );
  }

  componentWillMount() {
    store.dispatch(changeAudioSource(AudioVisualization));
  }
}
