import { actionTypes } from "../../actionTypes";

const initialState = JSON.parse(localStorage.getItem("isAudioMuted")) || true;

export const isAudioMuted = (state = initialState, action) => {
  // console.log('state: ', state);
  if (action.type === actionTypes.ui.AUDIO_MUTE_TOGGLE) {
    // console.log('changing isAudioMuted', action.payload);
    let isMuted = action.payload
    localStorage.setItem("isAudioMuted", JSON.stringify(isMuted));
    return isMuted;
  }
  return state;
};
