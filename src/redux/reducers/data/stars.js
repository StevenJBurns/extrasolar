import { actionTypes } from '../../actionTypes';

export const stars = (state = [], action) => {
  switch(action.type) {
    case actionTypes.data.STARS_ASYNC_GET_BEGIN:
      break;
    case actionTypes.data.STARS_ASYNC_GET_SUCCESS:
      {
      return {...state, stars: action.payload};
      }
    case actionTypes.data.STARS_ASYNC_GET_FAILED:
      break;
    default:
  }
  return state;
};
