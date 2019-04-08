import { combineReducers } from "redux";

import { reducerUI } from "./ui/reducerUI";
import { reducerData } from "./data/reducerData";
import { reducerFilters } from "./filter/reducerFilters";
import { reducerSorting } from "./sort/reducerSorting";


const initalState = {
  ui: {},
  data: {},
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
