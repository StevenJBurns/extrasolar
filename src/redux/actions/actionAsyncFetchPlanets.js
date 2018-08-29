import { fetchPlanetsBegin, fetchPlanetsSuccess, fetchPlanetsFailed } from ".";


// const urlDistinctPlanets = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=distinct%20pl_hostname,pl_cbflag,pl_pnum,st_mass,st_rad,st_teff,st_dist&order=pl_hostname&format=json";
const urlDistinctPlanets = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_hostname,pl_letter,pl_orbeccen,pl_orbsmax,pl_orbper&format=json";

export function fetchPlanets() {
    return dispatch => {      
      dispatch(fetchPlanetsBegin());
      return fetch(urlDistinctPlanets)
        .then(handleErrors)
        .then(res => res.json())
        .then(jsonStars => {
          dispatch(fetchPlanetsSuccess(jsonStars));
          return jsonStars;
        })
        .catch(error => dispatch(fetchPlanetsFailed(error)));
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
