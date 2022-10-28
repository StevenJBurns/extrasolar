interface IPlanet {
  id: string,
  mass: number | null,
  radius: number | null,
  orbit: PlanetOrbit,
}

type PlanetOrbit = {
  max?: number | null
  period?: number | null,
  eccentricity?: number | null,
};

/* exoplanet mass and radius are relative to Earth */
export class Planet implements IPlanet {
  #id: string;
  #mass: number | null ;
  #radius: number | null;
  #orbit: PlanetOrbit;

  constructor(args: IPlanet) {
    this.#id = args.id;
    this.#mass = args.mass;
    this.#radius = args.radius;
    this.#orbit = args.orbit;
  }

  get id() {
    return this.#id;
  }

  get mass() {
    return this.#mass;
  }

  get radius() {
    return this.#radius;
  }

  get orbit() {
    return this.#orbit;
  }
}
