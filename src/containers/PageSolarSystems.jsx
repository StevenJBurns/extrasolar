/* React and Redux imports */
import React from 'react';
import store from "../redux/store";
import { changeAudioSource } from "../redux/actions";

/* Style Imports */
import "../styles/PageSolarSystems.css";

/* Page specific imports */
import AudioVisualization from '../assets/audio/visualization.ogg';


export class PageSolarSystems extends React.Component {
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
