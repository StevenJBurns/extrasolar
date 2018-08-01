export const toggleAudio = audioState => ({
    type: "TOGGLE_AUDIO",
    payload: { audioState: !audioState }
})