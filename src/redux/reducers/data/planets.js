import { actionTypes } from "../../actionTypes";

export const planets = (state = [], action) => {
  switch(action.type) {
    case actionTypes.data.PLANETS_ASYNC_GET_BEGIN:
      break;
    case actionTypes.data.PLANETS_ASYNC_GET_SUCCESS:
      return {...state, planets: action.payload};
    case actionTypes.data.PLANETS_ASYNC_GET_FAILED:
      break;
    default:
      return state;
  }
};