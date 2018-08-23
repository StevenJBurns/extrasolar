import { createStore } from "redux";
import { rootReducer } from "../reducers";


if (localStorage.getItem("isAudioMuted") === null) {
  localStorage.setItem("isAudioMuted", "false")
};

const initialState = {
  isAudioMuted: false,
  filters: {},
  sorting: {},
}

export const store = createStore(rootReducer, initialState);
