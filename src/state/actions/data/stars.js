import { actionTypes } from '../../actionTypes';
import { setLastDataFetchDatetime } from '../ui/lastDataFetch';

// const urlDistinctStars = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+distinct+hostname,sy_snum,cb_flag,sy_pnum,st_mass,st_rad,st_teff,sy_dist+from+ps+order+by+hostname&format=json';
const urlDistinctStars = '/TAP/sync?query=select+distinct+hostname,sy_snum,cb_flag,sy_pnum,st_mass,st_rad,st_teff,sy_dist+from+ps+order+by+hostname&format=json';

export const getStarsBegin = status => ({
  type: actionTypes.data.STARS_ASYNC_GET_BEGIN,
  payload: status,
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

    return fetch(urlDistinctStars, { mode: 'no-cors' })
      .then(handleHttpErrors)
      .then(res => res.json())
      .then(data => dispatch(getStarsSuccess(data)))
      .then(() => dispatch(setLastDataFetchDatetime(Date.now())))
      .catch(error => {
        console.error(error);
        dispatch(getStarsFailed(error))
      })
      // .finally(() => {
      //   dispatch(getStarsBegin(false));
      //   dispatch(setLastDataFetchDatetime(Date.now()));
      // })
    }
  }

/* Handle HTTP errors when Fetch API can't catch them */
export const handleHttpErrors = response => {
  if (!response.ok) throw Error(response.statusText);
  return response;
};
