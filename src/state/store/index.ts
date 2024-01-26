//import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';
import { persistedRootReducer as rootReducer } from '../reducers';
// import { solarSystems } from '../reducers/data/solarSystems';

// const initialState = {
// audio: {},
// bookmarks: [],
// selectedSolarSystemID: null,
// stars: {},
// planets: {},
// solarSystems: {
//   status: undefined,
//   lastRequest: {

//   },
//   list: [],
//   error: '',
// },
// data: {},
// ui: {},
// };

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
  // initialState,
  // composeWithDevTools(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);
