import { Star, Planet } from '../..';

 interface ISolarSystem {
  id: string,
  stars: Array<Star>,
  planets: Array<Planet>,
}

export class SolarSystem {
  #id: string;
  #stars: Array<Star> = [];
  #planets: Array<Planet> = [];

  constructor(args: ISolarSystem) {
    this.#id = args.id;
    this.#stars = args.stars;
    this.#planets = args.planets;
  }

  public get id() {
    return this.#id;
  }

  public get stars() {
    return this.#stars;
  }

  public get planets() {
    return this.#planets;
  }
}
