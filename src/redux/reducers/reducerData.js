import { actions } from "../actions/actionTypes.js";


if (localStorage.getItem("lastFetch") === null) {
  localStorage.setItem("lastFetch", Date.now().toString())
};

const initialState = {
  data: {
    stars: [],
    planets: [],
    isLoading: {stars: false, planets: false},
    selectedSolarSystem: null,
    lastFetch: JSON.parse(localStorage.getItem("lastFetch"))
  }
};

export const reducerData = (state = initialState, action) => {
  switch (action.type) {
    case (actions.FETCH_STARS_BEGIN):
      state = {...state, ...state.ui, ...state.data, isLoading: true, error: null}
      break;
    case (actions.FETCH_STARS_SUCCESS):
      state = {...state, ...state.ui, ...state.data, isLoading: false, stars: action.payload}
      break;
    case (actions.FETCH_STARS_FAILED):
      state = {...state, ...state.ui, ...state.data, isLoading: false, stars: [], error: action.payload.error}
      break;
    case (actions.FETCH_PLANETS_BEGIN):
      state = {...state, ...state.ui, ...state.data, isLoading: true, error: null}
      break;
    case (actions.FETCH_PLANETS_SUCCESS):
      state = {...state, ...state.ui, ...state.data, isLoading: false, planets: action.payload}
      break;
    case (actions.FETCH_PLANETS_FAILED):
      state = {...state, ...state.ui, ...state.data, isLoading: false, planets: [], error: action.payload.error}
      break;
    case actions.GET_LAST_FETCH:
      state = {...state, ...state.ui, ...state.data, lastFetch: JSON.parse(localStorage["lastFetch"])};
      break;
    default:
      state = {...state};
  }
  return state;
}