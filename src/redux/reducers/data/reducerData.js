import { actionTypes } from "../../actionTypes";

if (localStorage.getItem("lastDataFetch") === null) {
  localStorage.setItem("lastDataFetch", Date.now().toString())
};

const initialState = {
  data: {
    stars: [],
    planets: [],
  }
};

export const reducerData = (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.data.FETCH_STARS_BEGIN):
      state = {...state, ...state.ui, ...state.data, isLoading: true, error: null}
      break;
    case (actionTypes.data.FETCH_STARS_SUCCESS):
      state = {...state, ...state.ui, ...state.data, isLoading: false, stars: action.payload}
      break;
    case (actionTypes.data.FETCH_STARS_FAILED):
      state = {...state, ...state.ui, ...state.data, isLoading: false, stars: [], error: action.payload.error}
      break;
    case (actionTypes.data.FETCH_PLANETS_BEGIN):
      state = {...state, ...state.ui, ...state.data, isLoading: true, error: null}
      break;
    case (actionTypes.data.FETCH_PLANETS_SUCCESS):
      state = {...state, ...state.ui, ...state.data, isLoading: false, planets: action.payload}
      break;
    case (actionTypes.data.FETCH_PLANETS_FAILED):
      state = {...state, ...state.ui, ...state.data, isLoading: false, planets: [], error: action.payload.error}
      break;
    case (actionTypes.ui.CHANGE_SELECTED_SYSTEM):
      state = {...state, ...state.ui, ...state.data, selectedSolarSystem: action.payload};
      break;
    case (actionTypes.ui.GET_LAST_DATA_FETCH):
      state = {...state, ...state.ui, ...state.data, lastDataFetch: JSON.parse(localStorage["lastDataFetch"])};
      break;
    default:
      state = {...state};
  }
  return state;
}