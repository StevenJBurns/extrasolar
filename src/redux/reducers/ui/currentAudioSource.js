import { actionTypes } from '../../actionTypes';

export const currentAudioSource = (state = null, action) => {
  switch (action.type) {
    case actionTypes.ui.AUDIO_SOURCE_CHANGE:
      return action.payload;
    default:
      return null;
  };
};
