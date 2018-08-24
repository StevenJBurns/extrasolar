import { actions } from  "../actions/actionTypes";

const initialState = {
  stars: [],
  loading: false,
  error: null
};

export const reducerStars = (state = initialState, action) => {
  switch (action.type) {
    case (actions.FETCH_STARS_BEGIN):
      state = {...state, loading: true, error: null}
      break;
    case (actions.FETCH_STARS_SUCCESS):
      state = {...state, loading: false, stars: action.payload.stars}
      break;
    case (actions.FETCH_STARS_FAILED):
      state = {...state, loading: false, stars: [], error: action.payload.error}
      break;
    default:
      state = {...state}
  }
  return state;
};