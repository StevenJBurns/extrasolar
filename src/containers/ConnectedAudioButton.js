/* React and Redux imports */
import { connect } from "react-redux";
import { toggleAudioMute } from "../redux/actions/index.js";

/* Component Imports */ 
import { AudioButton } from "../components/ui/AudioButton.jsx";


const mapStateToProps = state => ({
  isMuted: state.ui.isAudioMuted,
  source: state.ui.currentAudioSource
});

const mapDispatchToProps = dispatch => ({
  toggleMute: muted => dispatch(toggleAudioMute(muted))
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioButton);
