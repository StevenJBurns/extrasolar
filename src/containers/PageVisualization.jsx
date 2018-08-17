/* React and Redux imports */
import React from 'react';
import store from "../redux/store";
import { changeAudioSource } from "../redux/actions";

/* Page specific imports */
import AudioVisualization from '../assets/audio/visualization.ogg';


class PageVisualization extends React.Component {
  render() {
    return (
      <main>
        <h1>Visualization</h1>
      </main>
    );
  }

  componentWillMount() {
    store.dispatch(changeAudioSource(AudioVisualization));
  }
}

export default PageVisualization;