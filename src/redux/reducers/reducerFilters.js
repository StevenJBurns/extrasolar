import { actions } from "../actions/actionTypes.js";


const initialState = {
  filters: {
    planetCount: {min: 3, max: 6},
    starMass: {min: 5, max: 17},
    starRadius: null,
    starTemperature: null,
    planetOrbitEcc: null,
    planetSmeiMajorAxis: null,
    planetOrbitPeriod: null
  }
}

export const reducerFilters = (state = initialState, action) => {
  switch (action.type) {
    case (actions.FILTER_STARS_MASS):
      state = {...state, filters: {...state.filters, starMass: action.payload}};
      break;
    case (actions.FILTER_STARS_RADIUS):
      state = {...state, filters: {...state.filters, starRadius: action.payload}};
      break;
    case (actions.FILTER_STARS_TEMP):
      state = {...state, filters: {...state.filters, starTemperature: action.payload}}
      break;
    case (actions.CHANGE_FILTERS):
      state = {...state, ...state.filters, planetCount: action.payload}
    default:
      state = {...state};
  }
  return state;
}