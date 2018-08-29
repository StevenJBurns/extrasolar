import { actions } from "./actionTypes";


export const getLastFetch = () => ({
  type: actions.GET_LAST_FETCH,
  payload: JSON.parse(localStorage.getItem("lastFetch"))
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

export const fetchPlanetData = planetData => ({
  type: actions.FETCH_PLANET_DATA,
  payload: planetData
});

export const setFilters = newFilters => ({
  type: actions.SET_FILTERS,
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
