// const newUrl = 'https://extrasolar-proxy-server.glitch.me/get';
// const oldUrl = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+distinct+hostname,pl_letter,pl_orbeccen,pl_orbsmax,pl_orbper,pl_masse,pl_rade&format=json';
// const urlDistinctStars = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+distinct+hostname,sy_snum,cb_flag,sy_pnum,st_mass,st_rad,st_teff,sy_dist+from+ps+order+by+hostname&format=json';
const urlStarById = '';

export const fetchAllStars = async () => {
  return fetch('http://localhost:4000/get')
    .then(data => data.json())
    .catch(err => console.error(err.message));
};

export const fetchStarById = fetch(urlStarById)
  .then(star => star.json())
  .catch(err => console.error(err.message));
