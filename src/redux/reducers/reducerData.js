import { actions } from "../actions/actionTypes.js";


if (localStorage.getItem("lastFetch") === null) {
  localStorage.setItem("lastFetch", Date.now().toString())
};

const initialState = {
  data: {
    stars: [],
    planets: [],
    selectedSolarSystem: null,
    lastFetch: JSON.parse(localStorage.getItem("lastFetch"))
  }
};

export const reducerData = (state = initialState, action) => {
  switch (action.type) {
    case (actions.FETCH_STARS_BEGIN):
      state = {...state, ...state.data, loading: true, error: null}
      break;
    case (actions.FETCH_STARS_SUCCESS):
      state = {...state, ...state.data, loading: false, stars: action.payload}
      break;
    case (actions.FETCH_STARS_FAILED):
      state = {...state, ...state.data, loading: false, stars: [], error: action.payload.error}
      break;
    case actions.GET_LAST_FETCH:
      state = {...state, ...state.data, lastFetch: JSON.parse(localStorage["lastFetch"])};
      break;
    default:
      state = {...state};
  }
  // console.log('state.data: ', state.data);
  return state;
}