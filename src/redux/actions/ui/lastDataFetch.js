import { actionTypes } from '../../actionTypes';

export const getLastDataFetchDatetime = () => ({
  type: actionTypes.ui.GET_LAST_DATA_FETCH_DATETIME,
  payload: JSON.parse(localStorage.getItem("lastDataFetch"))
});

export const setLastDataFetchDatetime = () => ({
  type: actionTypes.ui.SET_LAST_DATA_FETCH_DATETIME,
  payload: new Date(),
});