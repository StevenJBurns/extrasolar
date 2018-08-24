import { actions } from "../actions/actionTypes.js";


if (localStorage.getItem("lastFetch") === null) {
  localStorage.setItem("lastFetch", Date.now().toString())
};

const initialState = {
  stars: [],
  planets: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"],
  selectedSolarSystem: null,
  filteredSolarSystems: null,
  lastFetch: JSON.parse(localStorage.getItem("lastFetch"))
}

export const reducerData = (state = initialState, action) => {
  console.log("action type: ", action.type);
  
  switch (action.type) {
    case actions.GET_LAST_FETCH:
      state = {...state, lastFetch: JSON.parse(localStorage["lastFetch"])};
      break;
    case actions.FETCH_STAR_DATA:
      state = {...state};
      break;
    case actions.FETCH_PLANET_DATA:
      state = {...state};
      break;
    default:
      state = {...state};
  }
  return state;
}