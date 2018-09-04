import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers";
import { composeWithDevTools } from 'redux-devtools-extension';


const ONE_HOUR = 60 * 60 * 1000; // # of milliseconds in one hour

if (localStorage.getItem("lastFetch") === null) {
  localStorage.setItem("lastFetch",  (Date.now() - ONE_HOUR).toString());
};

if (localStorage.getItem("isAudioMuted") === null) {
  localStorage.setItem("isAudioMuted", "false")
};

// let now = Date.now();
// let lastFetch = JSON.parse(localStorage.getItem("lastFetch"));
// let diff = now - lastFetch;

// console.log("diff: ", (diff / 1000) / 3600);

const initialState = {
  data: {
    lastFetch: localStorage.getItem("lastFetch")
  },
  ui: {
    isAudioMuted: localStorage.getItem("isAudioMuted")
  }
}



export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
