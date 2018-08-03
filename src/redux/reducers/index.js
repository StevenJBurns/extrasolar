const initialState = {
    isAudioMuted: false,
    currentAudioSource: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_AUDIO":
      return { ...state, isAudioMuted: !action.payload };
    case "CHANGE_AUDIO_SOURCE":
      console.log(action.payload);
      return { ...state, currentAudioSource: action.payload };
    default:
      return state;
  }
}; 

export default rootReducer;