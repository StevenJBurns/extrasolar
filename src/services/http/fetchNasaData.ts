// import { mapNasaDataToModels } from '../../utility/features';

// const urlProxy = 'https://extrasolar-proxy-server.glitch.me:4000/get';
// const oldUrl = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+distinct+hostname,pl_letter,pl_orbeccen,pl_orbsmax,pl_orbper,pl_masse,pl_rade&format=json';
// const newUrl = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+distinct+hostname,sy_snum,cb_flag,sy_pnum,st_mass,st_rad,st_teff,sy_dist+from+ps+order+by+hostname&format=json';

export const fetchStars = () => fetch('http://localhost:4000/stars');
export const fetchPlanets = () => fetch('http://localhost:4000/planets');

// export const fetchStars = () => fetch(urlProxy);
// export const fetchPlanets = () => fetch(urlProxy);

export const fetchNasaData = () => {
  return Promise.all([fetchStars(), fetchPlanets()]).catch(err => console.error(err));
};
