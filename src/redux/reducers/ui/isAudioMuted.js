import { actionTypes } from "../../actionTypes";

const initialState = {
  isAudioMuted: JSON.parse(localStorage.getItem("isAudioMuted")),
};

// if (localStorage.getItem('isAudioMuted') === null)
//   localStorage.setItem('isAudioMuted', 'false');

export const isAudioMuted = (state = initialState, action) => {  
  if (action.type === actionTypes.ui.TOGGLE_AUDIO_MUTE) {
      let isMuted = !action.payload   
      state = {...state, isAudioMuted: isMuted};
      localStorage.setItem("isAudioMuted", JSON.stringify(isMuted));
    }
  return state;
}