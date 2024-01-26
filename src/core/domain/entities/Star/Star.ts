import { StarParameters } from "./StarParameters";

/* mass and radius are relative to the Sun */
export class Star {
  #id: string;
  #mass: number | null;
  #radius: number | null;
  #temperature: number | null;

  constructor(args: StarParameters ) {
    this.#id = args.id;
    this.#mass = args.mass;
    this.#radius = args.radius;
    this.#temperature = args.temperature;
  }

  public get id() {
    return this.#id;
  }

  public get mass() {
    return this.#mass;
  }

  public get radius() {
    return this.#radius;
  }

  public get temperature() {
    return this.#temperature;
  }
}
