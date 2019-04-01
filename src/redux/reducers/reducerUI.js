import { actions } from "../actionTypes/actionTypes.js/index.js";

const initialState = {
  ui: {
    isAudioMuted: JSON.parse(localStorage.getItem("isAudioMuted")),
    currentAudioSource: null
  }
};

export const reducerUI = (state = initialState, action) => {  
  switch (action.type) {
    case actions.TOGGLE_AUDIO_MUTE:
      let isMuted = !action.payload   
      state = {...state, ...state.data, ...state.ui, isAudioMuted: isMuted};
      localStorage.setItem("isAudioMuted", JSON.stringify(isMuted));
      break;
    case actions.CHANGE_AUDIO_SOURCE:
      let source = action.payload;
      state = {...state, ...state.data, ...state.ui, currentAudioSource: source};
      break;
    default:
      state = {...state};
  }
  return state;
}
