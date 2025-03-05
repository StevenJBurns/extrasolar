import { combineReducers } from 'redux';
import { isAudioMuted } from './isAudioMuted';
import { currentAudioSource } from './currentAudioSource';
import { selectedSolarSystem } from './selectedSolarSystem';
import { bookmarkedSolarSystems } from './bookmarkedSolarSystems';
import { lastDataFetch } from './lastDataFetch';

export const ui = combineReducers({
  isAudioMuted,
  currentAudioSource,
  selectedSolarSystem,
  bookmarkedSolarSystems,
  lastDataFetch,
});
