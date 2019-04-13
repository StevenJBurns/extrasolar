import { actionTypes } from '../../actionTypes';

export const toggleAudioMute = audioState => ({
  type: actionTypes.ui.AUDIO_MUTE_TOGGLE,
  payload: audioState
});