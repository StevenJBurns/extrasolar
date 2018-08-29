/* React and Redux imports */
import { connect } from "react-redux";
import { actions } from "../redux/actions/actionTypes.js";
import { toggleAudioMute } from "../redux/actions/index.js";

/* Component Imports */ 
import { AudioButton } from "../components/ui/AudioButton.jsx";


const getStateUI = (muted) => {
  return muted;
};

const mapStateToProps = state => ({
  stateUI: getStateUI(state.ui.isAudioMuted, state.ui.audioSource)
});

const mapDispatchToProps = dispatch => ({
  toggleMute: muted => dispatch(toggleAudioMute(muted))
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioButton);
