import { actions } from "./actionTypes";


export const getLastFetch = () => ({
  type: actions.GET_LAST_FETCH,
  payload: JSON.parse(localStorage.getItem("lastFetch"))
});

export const fetchStarData = urlStarData => ({
  type: actions.FETCH_STAR_DATA,
  payload: urlStarData
});

export const fetchPlanetData = urlPlanetData => ({
  type: actions.FETCH_PLANET_DATA,
  payload: urlPlanetData
});

export const toggleAudioMute = audioState => ({
  type: actions.TOGGLE_AUDIO_MUTE,
  payload: audioState
});

export const changeAudioSource = audioSource => ({
  type: actions.CHANGE_AUDIO_SOURCE,
  payload: audioSource
});
