import { actions } from "../actions/actionTypes.js";


const initialState = {
  starMass: {min: 5, max: 17},
  starRadius: null,
  starTemperature: null,
  planetOrbitEcc: null,
  planetSmeiMajorAxis: null,
  planetOrbitPeriod: null
}

export const reducerFilters = (state = initialState, action) => {
  switch (action.type) {
    case (actions.FILTER_STARS_MASS):
      console.log('inside the mass filters reducer');
      state = {...state, filters: {...state.filters, starMass: action.payload}};
      break;
    case (actions.FILTER_STARS_RADIUS):
      state = {...state, filters: {...state.filters, starRadius: action.payload}};
      break;
    case (actions.FILTER_STARS_TEMP):
      state = {...state, filters: {...state.filters, starTemperature: action.payload}}
      break;
    default:
      state = {...state};
  }
  return state;
}