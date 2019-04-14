import { actionTypes } from "../../actionTypes";

/* # of milliseconds in one hour */
// const ONE_HOUR = 60 * 60 * 1000;

// if (localStorage.getItem('lastFetch') === null)
//   localStorage.setItem('lastFetch', (Date.now() - ONE_HOUR).toString());

const initialState = JSON.parse(localStorage.getItem("lastDataFetch")) || 0;

export const lastDataFetch = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ui.LAST_DATA_FETCH_DATETIME_GET:
      return {...state, lastDataFetch: action.payload}
    case actionTypes.ui.LAST_DATA_FETCH_DATETIME_SET:
      localStorage.setItem('lastDataFetch', action.payload);
      return state;
    default:
      return 0;
  };
};
