import { actions } from "./actionTypes";


export const getLastDataFetch = () => ({
  type: actions.GET_LAST_DATA_FETCH,
  payload: JSON.parse(localStorage.getItem("lastDataFetch"))
});

export const fetchStarsBegin = () => ({
  type: actions.FETCH_STARS_BEGIN
});

export const fetchStarsSuccess = stars => ({
  type: actions.FETCH_STARS_SUCCESS,
  payload: stars
});

export const fetchStarsFailed = error => ({
  type: actions.FETCH_STARS_FAILED,
  payload: error
});

export const fetchPlanetsBegin = () => ({
  type: actions.FETCH_PLANETS_BEGIN
});

export const fetchPlanetsSuccess = planets => ({
  type: actions.FETCH_PLANETS_SUCCESS,
  payload: planets
});

export const fetchPlanetsFailed = error => ({
  type: actions.FETCH_PLANETS_FAILED,
  payload: error
});

export const changeFilters = newFilters => ({
  type: actions.CHANGE_FILTERS,
  payload: newFilters
});

export const toggleAudioMute = audioState => ({
  type: actions.TOGGLE_AUDIO_MUTE,
  payload: audioState
});

export const changeAudioSource = audioSource => ({
  type: actions.CHANGE_AUDIO_SOURCE,
  payload: audioSource
});
