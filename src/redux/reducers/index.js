import AudioHome from "../../audio/home.ogg";

const initialState = {
    isAudioMuted: false,
    currentAudioSource: AudioHome
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_AUDIO":
      return { ...state, isAudioMuted: !action.payload };
    case "CHANGE_AUDIO_SOURCE":
      return { ...state, currentAudioSource: action.payload };
    default:
      return state;
  }
}; 

export default rootReducer;