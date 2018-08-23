import { actions } from "../actions/actionTypes.js";

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
      console.log("before", state.ui.isAudioMuted);    
      state = {...state, ui: {...state.ui, isAudioMuted: !state.ui.isAudioMuted}};
      console.log("after", state.ui.isAudioMuted);
      break;
    case actions.CHANGE_AUDIO_SOURCE:
      state = {...state};
      break;
    default:
      state = {...state};
  }
  return state;
}
