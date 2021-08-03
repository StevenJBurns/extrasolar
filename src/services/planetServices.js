const urlDistinctPlanets = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+distinct+hostname,pl_letter,pl_orbeccen,pl_orbsmax,pl_orbper,pl_masse,pl_rade&format=json';
const urlPlanetBySolarSystemId = '';
const urlPlanetById = '';

export const fetchAllPlanets = () => fetch(urlDistinctPlanets)
  .then(data => data.json())
  .catch(err => console.error(err.message));

export const fetchPlanetById = id => fetch(urlPlanetById)
  .then(planet => planet.json())
  .catch(err => console.error(err.message));

export const fetchPlanetBySolarSystemId = id => fetch(urlDistinctPlanets)
