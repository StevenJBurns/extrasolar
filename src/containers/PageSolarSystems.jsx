/* React and Redux imports */
import React from 'react';
import store from "../redux/store";
import { changeAudioSource } from "../redux/actions";

/* Style Imports */
import "../styles/PageSolarSystems.css";

/* Page specific imports */
import AudioSolarSystems from '../assets/audio/solarsystems.ogg';


export class PageSolarSystems extends React.Component {
  render() {
    return (
      <main id="main-solarsystems">
        <h1>Solar Systems</h1>
      </main>
    );
  }

  componentWillMount() {
    store.dispatch(changeAudioSource(AudioSolarSystems));
  }
}
