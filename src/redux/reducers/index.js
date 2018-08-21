import { ACTION_TYPES } from "../actions/actionTypes";


const initialState = {
    isAudioMuted: localStorage.getItem("isAudioMuted")
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_AUDIO_MUTE:
      return { ...state, isAudioMuted: !action.payload };
    case ACTION_TYPES.CHANGE_AUDIO_SOURCE:
      return { ...state, currentAudioSource: action.payload };
    case ACTION_TYPES.SELECT_SOLAR_SYSTEM:
      return state;
    case ACTION_TYPES.FILTER_SOLAR_SYSTEMS:
      return state;
    default:
      return state;
  }
}; 

export default rootReducer;