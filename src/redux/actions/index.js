import { actions } from "./actionTypes";


export const toggleAudioMute = audioState => ({
    type: actions.TOGGLE_AUDIO_MUTE,
    payload: audioState
});

export const changeAudioSource = audioSource => ({
    type: actions.CHANGE_AUDIO_SOURCE,
    payload: audioSource
});