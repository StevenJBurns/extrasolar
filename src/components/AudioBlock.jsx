import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeMute, faVolumeOff } from '@fortawesome/free-solid-svg-icons';

 const AudioBlock = () => (
  <button style={{ background: '#0F0F0F' }}>
    <FontAwesomeIcon icon={faVolumeUp} size="4x" />
    <FontAwesomeIcon icon={faVolumeOff} size="4x" />
  </button>
);

export default AudioBlock;