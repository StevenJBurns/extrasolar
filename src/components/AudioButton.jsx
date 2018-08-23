/* React and Redux imports */
import React from "react";
import { connect } from "react-redux";
import { actions } from "../redux/actions/actionTypes";
import { toggleAudioMute } from "../redux/actions/index.js";

/* FONT AWESOME! */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeOff } from '@fortawesome/free-solid-svg-icons';


const AudioButton = ({isMuted, toggleMute, audioSource}) => {  
  const buttonStyle = {
    width: '48px',
    height: '48px',
    margin: '12px',
    outline: 'none',
    borderRadius: '50%',
    background: `${ isMuted ? "darkred" : "darkgreen" }`
  };

  return (
    <div>
      <button type="button" style={ buttonStyle } onClick={ () => toggleMute(isMuted) }>
        <FontAwesomeIcon icon={ isMuted ? faVolumeOff : faVolumeUp } size="2x" />
      </button>
      <audio autoPlay loop src={ audioSource } muted={ isMuted }>
        <span>Your browser does not support the <code>audio</code> element.</span> 
      </audio>
    </div>
  )  
};

const mapStateToProps = state => {
  return {    
    isMuted: state.ui.isAudioMuted,
    audioSource: state.ui.audioSource
  }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleMute: muted => dispatch({ type: actions.TOGGLE_AUDIO_MUTE, payload: muted })
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(AudioButton);