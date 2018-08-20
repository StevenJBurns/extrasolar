/* React and Redux imports */
import React from 'react';
import store from "../redux/store";
import { changeAudioSource } from "../redux/actions";

/* Page specific imports */
import AudioData from '../assets/audio/data.ogg';


export class PageData extends React.Component {
  render() {
    return (
      <main>
        <h1>Data</h1>
      </main>
    );
  }

  componentWillMount() {
    store.dispatch(changeAudioSource(AudioData));
  }
}
