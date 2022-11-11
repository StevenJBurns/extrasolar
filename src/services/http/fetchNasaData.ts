import { mapNasaDataToModels } from '../../util';

const urlProxy = 'https://extrasolar-proxy-server.glitch.me/get';
// const oldUrl = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+distinct+hostname,pl_letter,pl_orbeccen,pl_orbsmax,pl_orbper,pl_masse,pl_rade&format=json';
// const newUrl = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+distinct+hostname,sy_snum,cb_flag,sy_pnum,st_mass,st_rad,st_teff,sy_dist+from+ps+order+by+hostname&format=json';

export const fetchDistinctHostStars = () => {
  return fetch('http://localhost:4000/stars');
};

export const fetchAllPlanets = () => {
  return fetch('http://localhost:4000/planets');
};

export const fetchNasaData = async () => {
  const data = await Promise.all([
    fetchDistinctHostStars(),
    fetchAllPlanets()
  ])
    .then(responses => Promise.all(
      responses.map(res => res.json())
    ))
    .then(([stars, planets]) => {
      console.log('stars', stars);
      console.log('planets', planets);
    }) 
    .catch(err => console.error(err));
  console.log(data);
  return data;
};
