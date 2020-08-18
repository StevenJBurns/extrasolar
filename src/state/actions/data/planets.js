import { actionTypes } from '../../actionTypes';
import { setLastDataFetchDatetime } from '../ui/lastDataFetch';

const urlDistinctPlanets = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_hostname,pl_letter,pl_orbeccen,pl_orbsmax,pl_orbper,pl_masse,pl_rade&format=json";

export const getPlanetsBegin = status => ({
  type: actionTypes.data.PLANETS_ASYNC_GET_BEGIN,
  isFetching: status,
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
    return fetch(urlDistinctPlanets)
      .then(handleErrors)
      .then(res => res.json())
      .then(jsonPlanets => dispatch(getPlanetsSuccess(jsonPlanets)))
      .then(() => dispatch(setLastDataFetchDatetime(new Date())))
      .catch(error => dispatch(getPlanetsFailed(error)))
      .finally(() => dispatch(getPlanetsBegin(false)))
    };
  };
    
  /* Handle HTTP errors when Fetch API can't catch them */
  export const handleErrors = response => {
    if (!response.ok) throw Error(response.statusText);
    
    return response;
  };
