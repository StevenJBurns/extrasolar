/* React and Redux imports */
import React from "react";
import store from "../redux/store";
import { toggleAudioMute } from "../redux/actions/index";  

/* FONT AWESOME! */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeOff } from '@fortawesome/free-solid-svg-icons';


const AudioButton = ({ isAudioMuted, audioSource }) => {
  const handleAudioButtonClick = () => store.dispatch(toggleAudioMute(isAudioMuted));

  const buttonColor = isAudioMuted ? "red" : "green";
  const buttonStyle = {
    width: '48px',
    height: '48px',
    margin: '12px',
    outline: 'none',
    borderRadius: '50%',
    background: `${ buttonColor }`
  };

  return (
    <div>
      <button type="button" style={ buttonStyle } onClick={ handleAudioButtonClick.bind(null, isAudioMuted) }>
        <FontAwesomeIcon icon={ isAudioMuted ? faVolumeOff : faVolumeUp } size="2x" />
      </button>
      <audio autoPlay loop src={ audioSource } muted={ isAudioMuted }>
        <span>Your browser does not support the <code>audio</code> element.</span> 
      </audio>
    </div>
  )
};

export default AudioButton;
