import { createStore } from "redux";
import { rootReducer } from "../reducers";


if (localStorage.getItem("isAudioMuted") === null) {
  localStorage.setItem("isAudioMuted", "false")
}

const initialState = {
  dataStars: [],
  dataPlanets: [],
  isAudioMuted: JSON.parse(localStorage.getItem("isAudioMuted")),
  currentAudioSource: null,
  selectedSolarSystem: null,
  filteredSolarSystems: null  
}

const store = createStore(rootReducer, initialState);

export default store;