import { combineReducers } from "redux";
import { data } from "./data";
import { filters } from "./filters/filters";
import { sorting } from "./sorting/sorting";
import { ui } from "./ui";

export const rootReducer = combineReducers({
  data, 
  filters,
  sorting,
  ui,
});
