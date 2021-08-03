import { actionTypes } from '../../actionTypes';

const initialState = {
  isFetching: false,
  list: [],
  error: '',
};

export const stars = (state = initialState, action) => {
  console.log(action.payload);
  switch(action.type) {
    case actionTypes.data.STARS_ASYNC_GET_BEGIN:
      return { ...state, isFetching: action.payload, list: [], error: '' }
    case actionTypes.data.STARS_ASYNC_GET_SUCCESS:
      return { ...state, isFetching: false, list: action.payload, error: '' };
    case actionTypes.data.STARS_ASYNC_GET_FAILED:
      return { ...state, isFetching: false, list: [], error: JSON.stringify(action.payload) }
    default:
      return state;
  }
};
