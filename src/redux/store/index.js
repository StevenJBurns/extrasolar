import { createStore } from "redux";
import { rootReducer } from "../reducers/index";


const urlDistinctStars = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=distinct%20pl_hostname,pl_cbflag,pl_pnum,st_mass,st_rad,st_teff,st_dist&order=pl_hostname&format=json";
const urlDistinctPlanets = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_hostname,pl_letter,pl_orbeccen,pl_orbsmax,pl_orbper&format=json";

if (localStorage.getItem("isAudioMuted") === null) {
  localStorage.setItem("isAudioMuted", "false")
}

console.log(JSON.parse(localStorage.getItem("isAudioMuted")));

const initialState = {
  urlDistinctStars,
  urlDistinctPlanets,
  distinctStars: [],
  distinctPlanets: [],
  isAudioMuted: JSON.parse(localStorage.getItem("isAudioMuted")),
  currentAudioSource: null,
  selectedSolarSystem: null,
  filteredSolarSystems: null  
}

const store = createStore(rootReducer, initialState);

export default store;