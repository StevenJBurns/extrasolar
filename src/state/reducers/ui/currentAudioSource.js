import { actionTypes } from '../../actionTypes';

export const currentAudioSource = (state = null, action) => {
  switch (action.type) {
    case actionTypes.ui.CHANGE_AUDIO_SOURCE:
      return action.payload;
    default:
      return null;
  };
};
