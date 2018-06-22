const initialState = {
    audioState: true
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_AUDIO":
      state.audioState = !state.audioState;
      return state;
    default:
      return state;
  }
}; 

export default rootReducer;