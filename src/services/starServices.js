const urlDistinctStars = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=distinct%20pl_hostname,pl_cbflag,pl_pnum,st_mass,st_rad,st_teff,st_dist&order=pl_hostname&format=json';
const urlStarById = '';

export const fetchAllStars = fetch(urlDistinctStars).then(data => data.json());

export const fetchStarById = fetch(urlStarById).then(star => star.json());
