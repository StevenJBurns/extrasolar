import { actions } from "../actions/actionTypes.js";

export const reducerUI = (state = {}, action) => {
  switch (action) {
    case actions.TOGGLE_AUDIO_MUTE:
      console.log("Audio Toggled: ", action);
      let muted = !action.payload;
      return {...state, isAudioMuted: muted};
    case actions.CHANGE_AUDIO_SOURCE:
      return {...state};
    default:
      return {...state};
  }
  // if (state === "undefined") return {};

  // if (action === actions.TOGGLE_AUDIO_MUTE)
  // return { ...state, ui: { isAudioMuted: !action.payload }};
}
