import { configureStore } from '@reduxjs/toolkit'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { persistedRootReducer as rootReducer } from 'state/reducers';
import { solarSystems } from 'state/reducers/data/solarSystems';

const initialState = {
  // audio: {},
  // bookmarks: [],
  // selectedSolarSystemId: null,
  // solarSystems: {
  //   status: undefined,
  //   lastRequest: {

  //   },
  //   list: [],
  //   error: '',
  // },
  data: {},
  ui: {},
};

// export const store = configureStore({
//   reducer: {
//     audio: audioReducer,
//     bookmarks: bookmarksReducer,
//     selectedSolarSystemId: selectedSolarSystemIdReducer,
//     solarSystems: solarSystemsReducer,
//     ui: uiReducer,
//   }}
// );

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);
