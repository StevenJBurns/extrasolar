import { actions } from  "../actions/actionTypes";

const initialState = {
  stars: [],
  loading: false,
  error: null
};

export const reducerStars = (state = initialState, action) => {
  console.log("Inside reducerStars -- ", action.type);
  
  switch (action.type) {
    case (actions.FETCH_STARS_BEGIN):
      console.log("fetchStars Begin");
      state = {...state, loading: true, error: null}
      break;
    case (actions.FETCH_STARS_SUCCESS):
      console.log("fetchStars Success!");
      state = {...state, loading: false, stars: action.payload}
      break;
    case (actions.FETCH_STARS_FAILED):
      state = {...state, loading: false, stars: [], error: action.payload.error}
      break;
    default:
      state = {...state}
  }
  return state;
};