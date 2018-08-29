import { actions } from "../actions/actionTypes.js";


if (localStorage.getItem("lastFetch") === null) {
  localStorage.setItem("lastFetch", Date.now().toString())
};

const initialState = {
  stars: [],
  planets: [],
  selectedSolarSystem: null,
  lastFetch: JSON.parse(localStorage.getItem("lastFetch"))
}

export const reducerData = (state = initialState, action) => {
  switch (action.type) {
    case (actions.FETCH_STARS_BEGIN):
      state = {...state, loading: true, error: null}
      break;
    case (actions.FETCH_STARS_SUCCESS):
      state = {...state, loading: false, stars: action.payload}
      break;
    case (actions.FETCH_STARS_FAILED):
      state = {...state, loading: false, stars: [], error: action.payload.error}
      break;
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