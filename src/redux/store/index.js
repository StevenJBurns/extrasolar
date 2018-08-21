import { createStore } from "redux";
import rootReducer from "../reducers/index";


if (localStorage.getItem("isAudioMuted") == null) {
  localStorage.setItem("isAudioMuted", "false")
}

console.log(JSON.parse(localStorage.getItem("isAudioMuted")));

const initialState = {
  isAudioMuted: JSON.parse(localStorage.getItem("isAudioMuted")),
  currentAudioSource: null,
  selectedSolarSystem: null,
  filteredSolarSystems: null  
}

const store = createStore(rootReducer, initialState);

export default store;