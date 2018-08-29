import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers";
import { composeWithDevTools } from 'redux-devtools-extension';


const ONE_HOUR = 60 * 60 * 1000; // One hour in milliseconds

if (localStorage.getItem("lastFetch") === null) {
  localStorage.setItem("lastFetch",  (Date.now() - ONE_HOUR).toString());
};

if (localStorage.getItem("isAudioMuted") === null) {
  localStorage.setItem("isAudioMuted", "false")
};

console.log("Now: ", Date.now().toLocaleString("en-us"));
console.log('lastFetch', JSON.parse(localStorage.getItem("lastFetch").toLocaleString("en-us")));

const initialState = {
  data: {
    lastFetch: localStorage.getItem("lastFetch")
  },
  ui: {
    isAudioMuted: localStorage.getItem("isAudioMuted")
  },
  filters: {},
  sorting: {}
}



export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
