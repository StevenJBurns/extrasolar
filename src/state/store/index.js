import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { persistedRootReducer as rootReducer } from 'state/reducers';

const initialState = {
  data: {},
  filters: {},
  sorting: {},
  ui: {},
};

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);
