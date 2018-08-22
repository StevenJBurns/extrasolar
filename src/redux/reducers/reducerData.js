import { actions } from "../actions/actionTypes.js";

const initialState = {
  data: {
    stars: [],
    planets: [],
    selectedSolarSystem: null,
    filteredSolarSystems: null  
  }
}

export const reducerData = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_STAR_DATA:
      state = {...state}
      break;
    case actions.FETCH_PLANET_DATA:
      state = {...state}
      break;
    default:
      state = {...state};
  }
  return state;
}