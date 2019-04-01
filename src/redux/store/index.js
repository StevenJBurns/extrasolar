import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from "../reducers";

/* # of milliseconds in one hour */
const ONE_HOUR = 60 * 60 * 1000;

if (localStorage.getItem("lastFetch") === null)
  localStorage.setItem("lastFetch",  (Date.now() - ONE_HOUR).toString());

if (localStorage.getItem("isAudioMuted") === null)
  localStorage.setItem("isAudioMuted", "false");

const initialState = {
  data: { lastFetch: localStorage.getItem("lastFetch") },
  ui: { isAudioMuted: localStorage.getItem("isAudioMuted") === "true" },
};

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
