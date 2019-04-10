import { actionTypes } from "../../actionTypes";

const initialState = {
  currentAudioSource: null
};

export const currentAudioSource = (state = initialState, action) => {  
  switch (action.type) {
    case actionTypes.ui.CHANGE_AUDIO_SOURCE:
      let source = action.payload;
      state = {...state, currentAudioSource: source};
      break;
    default:
      state = {...state};
  }
  return state;
}