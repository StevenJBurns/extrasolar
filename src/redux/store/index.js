import { createStore } from "redux";
import { rootReducer } from "../reducers";
import { composeWithDevTools } from 'redux-devtools-extension';



const initialState = {
  filters: {},
  sorting: {},
}

export const store = createStore(rootReducer, initialState, composeWithDevTools());
