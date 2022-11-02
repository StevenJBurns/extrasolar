const newUrl = 'https://extrasolar-proxy-server.glitch.me/get';

const oldUrl = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+distinct+hostname,pl_letter,pl_orbeccen,pl_orbsmax,pl_orbper,pl_masse,pl_rade&format=json';

export const fetchAllStars = () => fetch(newUrl)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err.message));

export const fetchPlanetById = id => fetch(oldUrl)
  .then(planet => planet.json())
  .catch(err => console.error(err.message));

export const fetchPlanetBySolarSystemId = id => fetch(oldUrl);
