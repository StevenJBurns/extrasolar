import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { audioMuteState: state.audioMuteState,
           audioSource: state.audioSource };
};

const ConnectedAudioButton = ({ audioMuteState, audioSource}) => (
  <button>
    <audio autoPlay loop src={ audioSource } muted={ audioMuteState }>
      <span>Your browser does not support the <code>audio</code> element.</span> 
    </audio>
  </button>
);

const AudioButton = connect(mapStateToProps)(ConnectedAudioButton);

export default AudioButton;


