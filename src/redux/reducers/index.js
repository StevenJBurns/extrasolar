const initialState = {
    appPages: ["Home", "Data", "Visualization", "About"],
    audioMuteState: true,
    audioSources: ["home.ogg", "data.ogg", "visualization.ogg" , "about.ogg"]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_AUDIO":
      state.audioMuteState = !state.audioMuteState;
      return state;
    default:
      return state;
  }
}; 

export default rootReducer;