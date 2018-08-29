/* React and Redux imports */
import React from "react";

/* FONT AWESOME! */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeOff } from '@fortawesome/free-solid-svg-icons';


export const AudioButton = ({source, isMuted, toggleMute }) => {
  const style_button = {
    width: '48px',
    height: '48px',
    margin: '12px',
    outline: 'none',
    borderRadius: '50%',
    background: `${ isMuted ? "darkred" : "darkgreen" }`
  };
  
  return (
    <div>
      <button type="button" style={ style_button } onClick={ () => toggleMute(isMuted) }>
        <FontAwesomeIcon icon={ isMuted ? faVolumeOff : faVolumeUp } size="2x" />
      </button>
      <audio autoPlay loop src={ source } muted={ isMuted }>
        <span>Your browser does not support the <code>audio</code> element.</span> 
      </audio>
    </div>
  )  
};
