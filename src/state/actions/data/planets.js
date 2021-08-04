import { actionTypes } from '../../actionTypes';
import { setLastDataFetchDatetime } from '../ui/lastDataFetch';

const urlDistinctPlanets = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+distinct+hostname,pl_letter,pl_orbeccen,pl_orbsmax,pl_orbper,pl_masse,pl_rade+from+ps&format=json';

export const getPlanetsBegin = status => ({
  type: actionTypes.data.PLANETS_ASYNC_GET_BEGIN,
  payload: status,
});

export const getPlanetsSuccess = planets => ({
  type: actionTypes.data.PLANETS_ASYNC_GET_SUCCESS,
  payload: planets,
});

export const getPlanetsFailed = error => ({
  type: actionTypes.data.PLANETS_ASYNC_GET_FAILED,
  payload: error,
});

export const getPlanetsThunk = () => {
  return dispatch => {      
    dispatch(getPlanetsBegin(true));

    return fetch(urlDistinctPlanets, { mode: 'no-cors' })
      .then(handleHttpErrors)
      .then(res => res.json())
      .then(data => dispatch(getPlanetsSuccess(data)))
      .then(() => dispatch(setLastDataFetchDatetime(Date.now())))
      .catch(error => {
        console.error(error);
        dispatch(getPlanetsFailed(error)
      )})
      // .finally(() => dispatch(getPlanetsBegin(false)))
    };
  };
    
  /* Handle HTTP errors when Fetch API can't catch them */
  export const handleHttpErrors = response => {
    if (!response.ok) throw Error(response.statusText);
    return response;
  };
