import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { data } from 'state/reducers/data';
import { ui } from 'state/reducers/ui';

const rootReducer = combineReducers({
  data, 
  ui,
});

const persistConfig = {
  key: 'root',
  storage: storage,
};

export const persistedRootReducer = persistReducer(persistConfig, rootReducer);