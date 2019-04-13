import { combineReducers } from 'redux';
import { isAudioMuted } from './isAudioMuted'
import { currentAudioSource } from './currentAudioSource';
import { selectedSolarSystem } from './selectedSolarSystem';
import { lastDataFetch } from './lastDataFetch';

export const ui = combineReducers({
  isAudioMuted,
  currentAudioSource,
  selectedSolarSystem,
  lastDataFetch,
});
