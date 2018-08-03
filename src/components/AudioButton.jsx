/* React and Redux imports */
import React from "react";
import store from "../redux/store";
import { toggleAudioMute } from "../redux/actions/index";  

/* FONT AWESOME! */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeOff } from '@fortawesome/free-solid-svg-icons';


const AudioButton = ({ isAudioMuted, audioSource }) => {
  console.log(audioSource);

  const handleAudioButtonClick = () => store.dispatch(toggleAudioMute(isAudioMuted));

  return (
    <div>
      <button type="button" style={{ 'height': '48px', 'width': '48px', 'background': '#007700' }} onClick={ handleAudioButtonClick.bind(null, isAudioMuted) }>
        <FontAwesomeIcon icon={ isAudioMuted ? faVolumeOff : faVolumeUp } size="3x" />
      </button>
      <audio autoPlay loop src={ audioSource } muted={ isAudioMuted }>
        <span>Your browser does not support the <code>audio</code> element.</span> 
      </audio>
    </div>
  )
};

export default AudioButton;
