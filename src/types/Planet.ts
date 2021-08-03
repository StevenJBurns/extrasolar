/* exoplanet mass and radius are relative to Earth */
export type Planet = {
  name: string,
  hostName: string,
  mass: number | null,
  radius: number | null,
  orbit: {
    max: number | null
    period: number | null,
    eccentricity: number | null,
  },
};
