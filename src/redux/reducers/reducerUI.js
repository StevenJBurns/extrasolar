import { actions } from "../actions/actionTypes.js";


if (localStorage.getItem("isAudioMuted") === null) {
  localStorage.setItem("isAudioMuted", "false")
};

const initialState =  {
    isAudioMuted: JSON.parse(localStorage.getItem("isAudioMuted")),
    currentAudioSource: null
  };

export const reducerUI = (state = initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_AUDIO_MUTE:
      let isMuted = !action.payload   
      state = {...state, isAudioMuted: isMuted};
      localStorage.setItem("isAudioMuted", JSON.stringify(isMuted));
      break;
    case actions.CHANGE_AUDIO_SOURCE:
      let source = action.payload;
      state = {...state, currentAudioSource: source};
      break;
    default:
      state = {...state};
  }
  return state;
}
