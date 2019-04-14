import { actionTypes } from "../actionTypes";

export const changeFilters = newFilters => ({
  type: actionTypes.filters.CHANGE_FILTERS,
  payload: newFilters
});
