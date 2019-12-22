import { actionTypes } from '../../actionTypes';
import { setLastDataFetchDatetime } from '../ui/lastDataFetch';

const urlDistinctStars = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=distinct%20pl_hostname,pl_cbflag,pl_pnum,st_mass,st_rad,st_teff,st_dist&order=pl_hostname&format=json";

export const getStarsBegin = status => ({
  type: actionTypes.data.STARS_ASYNC_GET_BEGIN,
  isFetching: status,
});

export const getStarsSuccess = stars => ({
  type: actionTypes.data.STARS_ASYNC_GET_SUCCESS,
  payload: stars,
});

export const getStarsFailed = error => ({
  type: actionTypes.data.STARS_ASYNC_GET_FAILED,
  payload: error,
});

export const getStarsThunk = () => {
  return dispatch => {
    dispatch(getStarsBegin(true));
    return fetch(urlDistinctStars)
      .then(handleErrors)
      .then(res => res.json())
      .then(jsonStars => dispatch(getStarsSuccess(jsonStars)))
      .then(() => dispatch(setLastDataFetchDatetime(new Date())))
      .catch(error => dispatch(getStarsFailed(error)))
      .finally(() => dispatch(getStarsBegin(false)))
    };
  };
  
/* Handle HTTP errors when Fetch API can't catch them */
export const handleErrors = response => {
  if (!response.ok) throw Error(response.statusText);
  
  return response;
};
