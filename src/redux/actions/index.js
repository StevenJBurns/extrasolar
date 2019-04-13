import { actionTypes } from "../actionTypes";

export const changeFilters = newFilters => ({
  type: actionTypes.filters.CHANGE_FILTERS,
  payload: newFilters
});

export const changeAudioSource = audioSource => ({
  type: actionTypes.ui.AUDIO_SOURCE_CHANGE,
  payload: audioSource
});

export const changeSelectedSystem = newSystem => ({
  type: actionTypes.ui.SELECTED_SOLARSYSTEM_CHANGE,
  payload: newSystem
});
