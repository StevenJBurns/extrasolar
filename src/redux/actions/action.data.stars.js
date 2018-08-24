import { fetchStarsBegin, fetchStarsSuccess, fetchStarsFailed } from "./index";


const urlDistinctStars = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=distinct%20pl_hostname,pl_cbflag,pl_pnum,st_mass,st_rad,st_teff,st_dist&order=pl_hostname&format=json";

export function fetchStars() {
  console.log("Starting fetchStars");
  
  return dispatch => {      
    dispatch(fetchStarsBegin());
    return fetch(urlDistinctStars)
      .then(handleErrors)
      .then(res => res.json())
      .then(jsonStars => {
        console.log(jsonStars);
        dispatch(fetchStarsSuccess(jsonStars));
        return jsonStars;
      })
      .catch(error => dispatch(fetchStarsFailed(error)));
    };
  }
  
// Handle HTTP errors when Fetch API can't catch them
function handleErrors(response) {
  if (!response.ok) {
    console.log("fetchStars Failed!");
    throw Error(response.statusText);
  }
  return response;
}