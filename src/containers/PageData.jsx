/* React and Redux imports */
import React from 'react';
import { store } from "../redux/store";
import { connect } from "react-redux";
import { changeAudioSource } from "../redux/actions";

/* Page specific imports */
import AudioData from '../assets/audio/data.ogg';

/* Style Imports */
import "../styles/PageData.css";


export class PageData extends React.Component {
  render() {
    return (
      <main id="main-data">
        <h1>Data</h1>
      </main>
    );
  }

  componentWillMount() {
    // store.dispatch(changeAudioSource(AudioData));
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // toggleMute: muted => dispatch(toggleAudioMute(muted))
  }
}

// export default connect(null, mapDispatchToProps)(AudioButton);