import { actionTypes } from '../../actionTypes';

export const setLastDataFetchDatetime = date => ({
  type: actionTypes.ui.SET_LAST_DATA_FETCH_DATETIME,
  payload: date,
});