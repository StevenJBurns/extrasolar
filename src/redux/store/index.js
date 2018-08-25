import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers";
import { composeWithDevTools } from 'redux-devtools-extension';



const initialState = {
  filters: {},
  sorting: {},
}

export const store = createStore(rootReducer, initialState, applyMiddleware(thunk), composeWithDevTools());
