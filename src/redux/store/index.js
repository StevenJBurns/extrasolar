import { createStore } from "redux";
import rootReducer from "../reducers/index";

const initialState = {
  isAudioMuted: false,
  currentPage: "Home"  
}

const store = createStore(rootReducer, initialState);

export default store;