import { actionTypes } from "../../actionTypes";

const initialState = {
  lastDataFetch: null,
};

/* # of milliseconds in one hour */
// const ONE_HOUR = 60 * 60 * 1000;

// if (localStorage.getItem('lastFetch') === null)
//   localStorage.setItem('lastFetch', (Date.now() - ONE_HOUR).toString());

export const lastDataFetch = (state = initialState, action) => {  
  switch (action.type) {
    case actionTypes.ui.LAST_DATA_FETCH_DATETIME_GET:

    break;
    case actionTypes.ui.LAST_DATA_FETCH_DATETIME_SET:

    break;
    default:
      state = {...state};
  }
  return state;
}