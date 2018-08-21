import { actions } from "../actions/actionTypes";


const initialState = {
  isAudioMuted: localStorage.getItem("isAudioMuted"),
  currentAudioSource: null,
  selectedSolarSystem: null,
  filteredSolarSystems: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_AUDIO_MUTE:
      console.log("Is Audio Muted:", action.payload)
      return { ...state, isAudioMuted: !action.payload };
    case actions.CHANGE_AUDIO_SOURCE:
      console.log("Audio Source:", action.payload)
      return { ...state, currentAudioSource: action.payload };
    case actions.SELECT_SOLAR_SYSTEM:
      return state;
    case actions.FILTER_SOLAR_SYSTEMS:
      return state;
    default:
      return state;
  }
}; 
