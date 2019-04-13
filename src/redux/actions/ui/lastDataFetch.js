import { actionTypes } from '../../actionTypes';

export const getLastDataFetch = () => ({
  type: actionTypes.ui.LAST_DATA_FETCH_DATETIME_GET,
  payload: JSON.parse(localStorage.getItem("lastDataFetch"))
});

export const setLastDataFetch = () => ({
  type: actionTypes.ui.LAST_DATA_FETCH_DATETIME_SET,
  payload: new Date(),
});