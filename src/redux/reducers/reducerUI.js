import { actions } from "../actions/actionTypes.js";


if (localStorage.getItem("isAudioMuted") === null) {
  localStorage.setItem("isAudioMuted", "false")
};

const initialState =  {
  ui:
    {
    isAudioMuted: JSON.parse(localStorage.getItem("isAudioMuted")),
    currentAudioSource: null
    }
  };

export const reducerUI = (state = initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_AUDIO_MUTE:
      console.log("before", state.isAudioMuted); 
      let isMuted = !action.payload   
      state = {...state, isAudioMuted: isMuted};
      console.log("after", state.isAudioMuted);
      break;
    case actions.CHANGE_AUDIO_SOURCE:
      state = {...state};
      break;
    default:
      state = {...state};
  }
  return state;
}
