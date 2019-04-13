import { actionTypes } from '../../actionTypes';

export const currentAudioSource = (state = {}, action) => {  
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