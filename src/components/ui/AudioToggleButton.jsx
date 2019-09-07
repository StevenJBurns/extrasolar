import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { actionTypes } from '../../redux/actionTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeOff } from '@fortawesome/free-solid-svg-icons';
import './AudioToggleButton.scss';

export const AudioToggleButton = () => {
  const dispatch = useDispatch();

  const isAudioMuted = useSelector(state => state.ui.isAudioMuted);
  const audioSourceFile = useSelector(state => state.ui.currentAudioSource);

  const toggleAudioMute = () => 
    dispatch({ type: actionTypes.ui.TOGGLE_AUDIO_MUTE, payload: !isAudioMuted });

  const buttonStyle = {
    width: '48px',
    height: '48px',
    margin: '12px',
    outline: 'none',
    borderRadius: '50%',
    background: `${ isAudioMuted ? "darkred" : "darkgreen" }`
  };
  
  return (
    <div>
      <button type="button" style={buttonStyle} onClick={toggleAudioMute}>
        <FontAwesomeIcon icon={ isAudioMuted ? faVolumeOff : faVolumeUp } size="2x" />
      </button>
      <audio autoPlay loop src={audioSourceFile} muted={isAudioMuted}>
        <span>Your browser does not support the <code>audio</code> element.</span> 
      </audio>
    </div>
  );
};

AudioToggleButton.propTypes = {

};

AudioToggleButton.defaultProps = {

};
