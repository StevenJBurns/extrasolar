import React from 'react';
import { actionTypes } from '../../redux/actionTypes';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton } from '@material-ui/core';
import VolumeOff from '@material-ui/icons/VolumeOff';
import VolumeUp from '@material-ui/icons/VolumeUp';
import './AudioToggleButton.scss';

export const AudioToggleButton = () => {
  const dispatch = useDispatch();

  const isAudioMuted = useSelector(state => state.ui.isAudioMuted);
  const audioSourceFile = useSelector(state => state.ui.currentAudioSource);

  const toggleAudioMute = () => 
    dispatch({ type: actionTypes.ui.TOGGLE_AUDIO_MUTE, payload: !isAudioMuted });

  const buttonStyle = {
    // width: '48px',
    // height: '48px',
    // margin: '12px',
    // outline: 'none',
    // borderRadius: '50%',
    padding: 0,
    background: 'Gainsboro',
    color: isAudioMuted ? 'firebrick' : 'forestgreen',
    // background: `${ isAudioMuted ? "firebrick" : "limegreen" }`
  };
  
  return (
    <div>
      <IconButton type="button" style={buttonStyle} onClick={toggleAudioMute}>
        { isAudioMuted ? <VolumeOff fontSize="large" /> : <VolumeUp fontSize="large" /> }
      </IconButton>
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
