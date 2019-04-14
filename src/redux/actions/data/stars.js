import { actionTypes } from '../../actionTypes';

const urlDistinctStars = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=distinct%20pl_hostname,pl_cbflag,pl_pnum,st_mass,st_rad,st_teff,st_dist&order=pl_hostname&format=json";

export const getStarsBegin = () => ({
  type: actionTypes.data.STARS_ASYNC_GET_BEGIN,
});

export const getStarsSuccess = stars => ({
  type: actionTypes.data.STARS_ASYNC_GET_SUCCESS,
  payload: stars
});

export const getStarsFailed = error => ({
  type: actionTypes.data.STARS_ASYNC_GET_FAILED,
  payload: error
});

export const getStarsAsync = () => {
  return dispatch => {
    dispatch(getStarsBegin());
    return fetch(urlDistinctStars)
      .then(handleErrors)
      .then(res => res.json())
      .then(jsonStars => {
        dispatch(getStarsSuccess(jsonStars));
        return jsonStars;
      })
      .catch(error => dispatch(getStarsFailed(error)));
    };
  }
  
/* Handle HTTP errors when Fetch API can't catch them */
export const handleErrors = (response) => {
  if (!response.ok) {
    console.log("getStarsAsync Failed!");
    throw Error(response.statusText);
  }
  return response;
}