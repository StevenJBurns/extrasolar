import { actionTypes } from "../../actionTypes";

/* # of milliseconds in one hour */
// const ONE_HOUR = 60 * 60 * 1000;

// if (localStorage.getItem('lastFetch') === null)
//   localStorage.setItem('lastFetch', (Date.now() - ONE_HOUR).toString());

// const initialState = JSON.parse(localStorage.getItem("lastDataFetch")) || new Date();
const initialState = new Date();

export const lastDataFetch = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ui.GET_LAST_DATA_FETCH_DATETIME:
      return {...state, lastDataFetch: action.payload}
    case actionTypes.ui.SET_LAST_DATA_FETCH_DATETIME:
      localStorage.setItem('lastDataFetch', action.payload);
      return { ...state, lastDataFetch: new Date() };
    default:
      return state;
  };
};
