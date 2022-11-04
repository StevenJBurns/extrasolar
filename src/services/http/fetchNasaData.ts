const newUrl = 'https://extrasolar-proxy-server.glitch.me/get';
// const oldUrl = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+distinct+hostname,pl_letter,pl_orbeccen,pl_orbsmax,pl_orbper,pl_masse,pl_rade&format=json';
// const urlDistinctStars = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+distinct+hostname,sy_snum,cb_flag,sy_pnum,st_mass,st_rad,st_teff,sy_dist+from+ps+order+by+hostname&format=json';
const urlStarById = '';

export const fetchDistinctHostStars = async () => {
  return fetch('http://localhost:4000/stars')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err.message));
};

export const fetchAllPlanets = async () => {
  return fetch('http://localhost:4000/planets')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err.message));
};

// export const fetchNasaData = async () => {
//   return Promise.all([fetchAllStars, fetchAllPlanets])
//   .then(responses => );
// };
