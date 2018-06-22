import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeMute, faVolumeOff } from '@fortawesome/free-solid-svg-icons';

const mapStateToProps = state => {
  return { audioMuteState: state.audioMuteState,
           audioSource: state.audioSource };
};

const AudioButton = ({ audioMuteState, audioSource}) => (
  <div>
    <FontAwesomeIcon icon="volume-up" />

  </div>
);

// const AudioButton = connect(mapStateToProps)(ConnectedAudioButton);

export default AudioButton;

{/* <audio autoPlay loop src={ audioSource } muted={ audioMuteState }>
  <span>Your browser does not support the <code>audio</code> element.</span> 
</audio> */}


