import { actionTypes } from '../../actionTypes';

export const changeAudioSource = audioSource => ({
  type: actionTypes.ui.AUDIO_SOURCE_CHANGE,
  payload: audioSource
});
