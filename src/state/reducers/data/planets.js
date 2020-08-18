import { actionTypes } from "../../actionTypes";

const initialState = {
  isFetching: false,
  list: [],
  error: '',
};

export const planets = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.data.PLANETS_ASYNC_GET_BEGIN:
      return { ...state, isFetching: action.isFetching }
    case actionTypes.data.PLANETS_ASYNC_GET_SUCCESS:
      return { ...state, list: action.payload };
    case actionTypes.data.PLANETS_ASYNC_GET_FAILED:
      return { ...state, error: action.error};
    default:
      return state;
  }
};
