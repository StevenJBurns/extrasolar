import { createStore } from "redux";
import { rootReducer } from "../reducers";


if (localStorage.getItem("isAudioMuted") === null) {
  localStorage.setItem("isAudioMuted", "false")
};

const initialState = {
  data: {
    stars: [],
    planets: [],
    selectedSolarSystem: null,
    filteredSolarSystems: null  
  },
  ui: {
    isAudioMuted: localStorage.getItem("isAudioMuted"),
    currentAudioSource: null
  },
  filters: {},
  sorting: {},
}

const store = createStore(rootReducer, initialState);

export default store;