import { actions } from "../actions/actionTypes.js";


if (localStorage.getItem("lastFetch") === null) {
  localStorage.setItem("lastFetch", Date.now().toString())
};

const initialState = {
  stars: [],
  planets: [],
  selectedSolarSystem: null,
  filteredSolarSystems: null,
  lastFetch: JSON.parse(localStorage.getItem("lastFetch"))
}

export const reducerData = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_LAST_FETCH:
      state = {...state, lastFetch: JSON.parse(localStorage["lastFetch"])}
      break;
    case actions.FETCH_STAR_DATA:
      state = {...state}
      break;
    case actions.FETCH_PLANET_DATA:
      state = {...state, planets: ["Mercury", "Venus"]}
      console.log("state in reducer: ", state);
      break;
    default:
      state = {...state};
  }
  return state;
}