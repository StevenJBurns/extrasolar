import { actionTypes } from '../../actionTypes';

export const getLastDataFetchDatetime = () => ({
  type: actionTypes.ui.GET_LAST_DATA_FETCH_DATETIME,
  payload: JSON.parse(localStorage.getItem("lastDataFetch"))
});

export const setLastDataFetchDatetime = date => ({
  type: actionTypes.ui.SET_LAST_DATA_FETCH_DATETIME,
  payload: date,
});