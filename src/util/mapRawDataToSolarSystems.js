export const mapRawDataToSolarSystems = (stars, planets) => {
  return stars.map(star => {
    let filteredPlanets = planets.filter(planet => 
        planet.pl_hostname === star.pl_hostname
      );

    return {
      id: star.pl_hostname,
      star: star,
      planets: filteredPlanets
    }
  });
};
