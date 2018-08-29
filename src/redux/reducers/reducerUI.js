import { actions } from "../actions/actionTypes.js";


if (localStorage.getItem("isAudioMuted") === null) {
  localStorage.setItem("isAudioMuted", "false")
};

const initialState =  {
  ui: {
    isAudioMuted: JSON.parse(localStorage.getItem("isAudioMuted")),
    currentAudioSource: null
  }
};

export const reducerUI = (state = initialState, action) => {  
  switch (action.type) {
    case actions.TOGGLE_AUDIO_MUTE:
      let isMuted = !action.payload   
      state = {...state, ...state.ui, isAudioMuted: isMuted};
      localStorage.setItem("isAudioMuted", JSON.stringify(isMuted));
      console.log(JSON.parse(localStorage.getItem("isAudioMuted")));
      break;
    case actions.CHANGE_AUDIO_SOURCE:
      let source = action.payload;
      state = {...state, ...state.ui, currentAudioSource: source};
      break;
    default:
      state = {...state};
  }
  return state;
}
