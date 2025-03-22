import { actionTypes } from '../../actionTypes';

/* # of milliseconds in one hour */
// const ONE_HOUR = 60 * 60 * 1000;

export const lastDataFetch = (state = Date.now(), action) => {
  switch (action.type) {
    case actionTypes.ui.SET_LAST_DATA_FETCH_DATETIME:
      return new Date(action.payload);
    default:
      return state;
  }
};
