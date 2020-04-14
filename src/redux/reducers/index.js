import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { data } from "redux/reducers/data";
import { filters } from "redux/reducers//filters/filters";
import { sorting } from "redux/reducers//sorting/sorting";
import { ui } from "redux/reducers//ui";

const rootReducer = combineReducers({
  data, 
  filters,
  sorting,
  ui,
});

const persistConfig = {
  key: 'root',
  storage: storage,
};

export const persistedRootReducer = persistReducer(persistConfig, rootReducer);