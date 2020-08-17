const urlDistinctPlanets = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_hostname,pl_letter,pl_orbeccen,pl_orbsmax,pl_orbper,pl_masse,pl_rade&format=json';
const urlPlanetBySolarSystemId = ';'
const urlPlanetById = '';

export const fetchAllPlanets = () => fetch(urlDistinctPlanets).then(data => data.json());

export const fetchPlanetById = id => fetch(urlPlanetById).then(planet => planet.json());

export const fetchPlanetBySolarSystemId = id => fetch(urlDistinctPlanets)
