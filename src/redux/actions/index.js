import { ACTION_TYPES } from "./actionTypes";


export const toggleAudioMute = audioState => ({
    type: ACTION_TYPES.TOGGLE_AUDIO_MUTE,
    payload: audioState
});

export const changeAudioSource = audioSource => ({
    type: ACTION_TYPES.CHANGE_AUDIO_SOURCE,
    payload: audioSource
});