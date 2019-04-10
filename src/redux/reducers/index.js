import { combineReducers } from "redux";
import { ui } from "./ui";
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
    ui,
    data: reducerData, 
    filters: reducerFilters,
    sorting: reducerSorting
  },
  initalState
);
