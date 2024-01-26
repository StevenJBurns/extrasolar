import { actionTypes } from '../../actionTypes';

export const currentAudioSource = (_, action) => {
  switch (action.type) {
    case actionTypes.ui.CHANGE_AUDIO_SOURCE:
      return action.payload;
    default:
      return null;
  }
};
