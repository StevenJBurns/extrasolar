import React from "react";
import { connect } from "react-redux";
import { toggleAudioMute } from "../../redux/actions/ui/audioMute";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeOff } from '@fortawesome/free-solid-svg-icons';
import './AudioToggleButton.scss';

export const AudioButton = ({source, isMuted, toggleMute }) => {
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
      <button type="button" style={buttonStyle} onClick={() => toggleMute(isMuted)}>
        <FontAwesomeIcon icon={ isMuted ? faVolumeOff : faVolumeUp } size="2x" />
      </button>
      <audio autoPlay loop src={source} muted={isMuted}>
        <span>Your browser does not support the <code>audio</code> element.</span> 
      </audio>
    </div>
  );
};

const mapStateToProps = state => ({
  isMuted: state.ui.isAudioMuted,
  source: state.ui.currentAudioSource
});

const mapDispatchToProps = dispatch => ({
  toggleMute: muted => dispatch(toggleAudioMute(muted))
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioButton);
