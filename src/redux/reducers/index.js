import { combineReducers } from "redux";

import { reducerUI } from "./reducerUI";
import { reducerData } from "./reducerData";
import { reducerFilters } from "./reducerFilters";
import { reducerSorting } from "./reducerSorting";


const initalState = {
  data: {},
  ui: {},
  filters: {},
  sorting: {}
}

export const rootReducer = combineReducers(
  {
    ui: reducerUI,
    data: reducerData, 
    filters: reducerFilters,
    sorting: reducerSorting
  },
  initalState
);
