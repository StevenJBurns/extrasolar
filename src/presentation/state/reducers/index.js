import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { data } from './data';
import { ui } from './ui';

const rootReducer = combineReducers({
  data,
  ui,
});

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['data'],
};

export const persistedRootReducer = persistReducer(persistConfig, rootReducer);
