export const toggleAudioMute = audioState => ({
    type: "TOGGLE_AUDIO",
    payload: audioState
});

export const changeAudioSource = audioSource => ({
    type: "CHANGE_AUDIO_SOURCE",
    payload: audioSource
});