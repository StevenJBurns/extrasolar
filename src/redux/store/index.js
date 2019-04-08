import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers';

/* # of milliseconds in one hour */
const ONE_HOUR = 60 * 60 * 1000;

if (localStorage.getItem('lastFetch') === null)
  localStorage.setItem('lastFetch', (Date.now() - ONE_HOUR).toString());

if (localStorage.getItem('isAudioMuted') === null)
  localStorage.setItem('isAudioMuted', 'false');

const initialState = {
  ui: {
    lastDataFetch: null,
    isAudioMuted: localStorage.getItem('isAudioMuted') === 'true' },
    currentAudioSource: null,
    selectedSolarSystem: null,
  data: {
    lastFetch: localStorage.getItem('lastFetch'),
  },
  filters: {},
  sorting: {},
};

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);
