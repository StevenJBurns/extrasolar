import { actionTypes } from "../actionTypes";

export const getLastDataFetch = () => ({
  type: actionTypes.data.GET_LAST_DATA_FETCH,
  payload: JSON.parse(localStorage.getItem("lastDataFetch"))
});

export const fetchStarsBegin = () => ({
  type: actionTypes.data.FETCH_STARS_BEGIN
});

export const fetchStarsSuccess = stars => ({
  type: actionTypes.data.FETCH_STARS_SUCCESS,
  payload: stars
});

export const fetchStarsFailed = error => ({
  type: actionTypes.data.FETCH_STARS_FAILED,
  payload: error
});

export const fetchPlanetsBegin = () => ({
  type: actionTypes.data.FETCH_PLANETS_BEGIN
});

export const fetchPlanetsSuccess = planets => ({
  type: actionTypes.data.FETCH_PLANETS_SUCCESS,
  payload: planets
});

export const fetchPlanetsFailed = error => ({
  type: actionTypes.FETCH_PLANETS_FAILED,
  payload: error
});

export const changeFilters = newFilters => ({
  type: actionTypes.filters.CHANGE_FILTERS,
  payload: newFilters
});

export const toggleAudioMute = audioState => ({
  type: actionTypes.ui.TOGGLE_AUDIO_MUTE,
  payload: audioState
});

export const changeAudioSource = audioSource => ({
  type: actionTypes.ui.CHANGE_AUDIO_SOURCE,
  payload: audioSource
});

export const changeSelectedSystem = newSystem => ({
  type: actionTypes.ui.CHANGE_SELECTED_SYSTEM,
  payload: newSystem
});
