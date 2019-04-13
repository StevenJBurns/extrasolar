import { combineReducers } from "redux";
import { ui } from "./ui";
import { data } from "./data";
import { filters } from "./filters/filters";
import { sorting } from "./sorting/sorting";

export const rootReducer = combineReducers({
  ui,
  data, 
  filters,
  sorting
});
