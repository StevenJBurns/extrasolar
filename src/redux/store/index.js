import { createStore } from "redux";
import { rootReducer } from "../reducers";


const initialState = {
  filters: {},
  sorting: {},
}

export const store = createStore(rootReducer, initialState);
