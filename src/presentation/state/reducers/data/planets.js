import { actionTypes } from "../../actionTypes";

const initialState = {
  isFetching: false,
  list: [],
  error: '',
};

export const planets = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.data.PLANETS_ASYNC_GET_BEGIN:
      return { ...state, isFetching: action.payload, list: [], error: '' };
    case actionTypes.data.PLANETS_ASYNC_GET_SUCCESS:
      return { ...state, isFetching: false, list: [...action.payload], error: '' };
    case actionTypes.data.PLANETS_ASYNC_GET_FAILED:
      return { ...state, isFetching: false, list: [], error: 'An API Fetch Error Occurred' };
    default:
      return state;
  }
};
