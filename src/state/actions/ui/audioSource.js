import { actionTypes } from '../../actionTypes';

export const changeAudioSource = audioSource => ({
  type: actionTypes.ui.CHANGE_AUDIO_SOURCE,
  payload: audioSource
});
