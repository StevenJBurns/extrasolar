const initialState = {
    appPages: ["Home", "Data", "Visualization", "About"],
    audioSources: ["home.ogg", "data.ogg", "visualization.ogg" , "about.ogg"],
    currentPage: "",
    isAudioMuted: true
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_AUDIO":
      console.log(this.state.audioMuted);
      return { ...state, isAudioMuted: !state.isAudioMuted};
    default:
      return state;
  }
}; 

export default rootReducer;