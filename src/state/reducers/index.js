import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { data } from 'state/reducers/data';
import { filters } from 'state/reducers/filters/filters';
import { sorting } from 'state/reducers/sorting/sorting';
import { ui } from 'state/reducers/ui';

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