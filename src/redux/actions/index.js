import { actionTypes } from "../actionTypes";

export const getLastDataFetch = () => ({
  type: actionTypes.ui.LAST_DATA_FETCH_DATETIME_GET,
  payload: JSON.parse(localStorage.getItem("lastDataFetch"))
});

export const fetchStarsBegin = () => ({
  type: actionTypes.data.STARS_ASYNC_GET_BEGIN,
});

export const fetchStarsSuccess = stars => ({
  type: actionTypes.data.STARS_ASYNC_GET_SUCCESS,
  payload: stars
});

export const fetchStarsFailed = error => ({
  type: actionTypes.data.STARS_ASYNC_GET_FAILED,
  payload: error
});

export const fetchPlanetsBegin = () => ({
  type: actionTypes.data.PLANETS_ASYNC_GET_BEGIN,
});

export const fetchPlanetsSuccess = planets => ({
  type: actionTypes.data.PLANETS_ASYNC_GET_SUCCESS,
  payload: planets
});

export const fetchPlanetsFailed = error => ({
  type: actionTypes.data.PLANETS_ASYNC_GET_FAILED,
  payload: error
});

export const changeFilters = newFilters => ({
  type: actionTypes.filters.CHANGE_FILTERS,
  payload: newFilters
});

export const toggleAudioMute = audioState => ({
  type: actionTypes.ui.AUDIO_MUTE_TOGGLE,
  payload: audioState
});

export const changeAudioSource = audioSource => ({
  type: actionTypes.ui.AUDIO_SOURCE_CHANGE,
  payload: audioSource
});

export const changeSelectedSystem = newSystem => ({
  type: actionTypes.ui.SELECTED_SOLARSYSTEM_CHANGE,
  payload: newSystem
});
