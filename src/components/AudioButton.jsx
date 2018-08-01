/* React and Redux imports */
import React from "react";
import { connect } from "react-redux";

/* FONT AWESOME! */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeOff } from '@fortawesome/free-solid-svg-icons';

/* Bring in the toggleAudio Redux Action */
import { toggleAudio } from "../redux/actions/index";  


const mapStateToProps = state => {
  return {
    isAudioMuted: state.isAudioMuted,
    audioSource: state.audioSource
  };
};

const mapDispatchToProps = dispatch => {
  return { toggleAudio: isAudioMuted => dispatch(toggleAudio(isAudioMuted)) };
};

const ConnectedAudioButton = ({ isAudioMuted, audioSource}) => (
  <div>
    <button type="button" style={{ 'height': '48px', 'width': '48px', 'background': '#007700' }} onClick={ toggleAudio }>
      <FontAwesomeIcon icon={ isAudioMuted ? faVolumeOff : faVolumeUp } size="3x" />
    </button>
    <audio autoPlay loop src={ audioSource } muted={ isAudioMuted }>
      <span>Your browser does not support the <code>audio</code> element.</span> 
    </audio>
  </div>
);

const AudioButton = connect(mapStateToProps, mapDispatchToProps)(ConnectedAudioButton);

export default AudioButton;
