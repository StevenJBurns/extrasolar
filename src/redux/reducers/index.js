import { combineReducers } from "redux";

import { reducerUI } from "./reducerUI";
import { reducerData } from "./reducerData";
import { reducerFilters } from "./reducerFilters";
import { reducerSorting } from "./reducerSorting";
import { reducerStars} from "./reducerStars";


export const rootReducer = combineReducers(
  {
    ui: reducerUI,
    data: reducerData, 
    filters: reducerFilters,
    sorting: reducerSorting,
    reducerStars
  }
);
