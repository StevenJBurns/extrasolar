const urlDistinctStars = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+distinct+hostname,sy_snum,cb_flag,sy_pnum,st_mass,st_rad,st_teff,sy_dist+from+ps+order+by+hostname&format=json';
const urlStarById = '';

export const fetchAllStars = fetch(urlDistinctStars)
  .then(data => data.json())
  .then(data => console.log({data}))
  .catch(err => console.error(err.message));

export const fetchStarById = fetch(urlStarById)
  .then(star => star.json())
  .catch(err => console.error(err.message));
