import { actionTypes } from "../../actionTypes";

const initialState = JSON.parse(localStorage.getItem("isAudioMuted")) || true;

export const isAudioMuted = (state = initialState, action) => {  
  if (action.type === actionTypes.ui.TOGGLE_AUDIO_MUTE) {
    let isMuted = !action.payload   
    localStorage.setItem("isAudioMuted", JSON.stringify(isMuted));
    return {...state, isAudioMuted: isMuted};
  }
  return state;
};
