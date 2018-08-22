/* React and Redux imports */
import React from "react";
import { toggleAudioMute } from "../redux/actions/index";  

/* FONT AWESOME! */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeOff } from '@fortawesome/free-solid-svg-icons';


const AudioButton = (store) => {
  console.log(this.context);
  
  let { isAudioMuted } = store;
  let audioSource;

  const buttonColor = isAudioMuted ? "darkred" : "darkgreen";

  const handleAudioButtonClick = () => {
    isAudioMuted = !isAudioMuted;
    console.log(isAudioMuted);
  }
    
  
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
      <button type="button" style={ buttonStyle } onClick={ handleAudioButtonClick }>
        <FontAwesomeIcon icon={ isAudioMuted ? faVolumeOff : faVolumeUp } size="2x" />
      </button>
      <audio autoPlay loop src={ audioSource } muted={ isAudioMuted }>
        <span>Your browser does not support the <code>audio</code> element.</span> 
      </audio>
    </div>
  )
};

export default AudioButton;
