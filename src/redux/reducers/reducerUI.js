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
      let muted = !action.payload
      // console.log("payload", action.payload);
      console.log("before:", state);
      state = {...state, ui: {...state.ui, isAudioMuted: muted}};
      console.log("after:", state);
      break;
    case actions.CHANGE_AUDIO_SOURCE:
      state = {...state};
      break;
    default:
      state = {...state};
  }
  return state;
}
