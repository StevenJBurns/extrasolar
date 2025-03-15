import { SolarSystemParameters } from '@domain/entities/SolarSystem/SolarSystemParameters.ts';
import { Star, Planet } from '../..';

export class SolarSystem implements SolarSystemParameters {
  #id: string;
  #stars: Array<Star> = [];
  #planets: Array<Planet> = [];

  constructor(args: SolarSystemParameters) {
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
