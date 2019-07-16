import { actionTypes } from "../../actionTypes";

const initialState = JSON.parse(localStorage.getItem("isAudioMuted")) || true;

export const isAudioMuted = (state = initialState, action) => {
  if (action.type === actionTypes.ui.AUDIO_MUTE_TOGGLE) {
    let isMuted = action.payload
    localStorage.setItem("isAudioMuted", JSON.stringify(isMuted));
    return isMuted;
  }
  return state;
};
