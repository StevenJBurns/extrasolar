import { StarfieldPoint } from "./StarfieldPoint";

export class StarfieldBackground {
  #points: Array<StarfieldPoint>;

  constructor(pointCount = 1024) {
    this.#points = Array(pointCount)
      .map(() => new StarfieldPoint());
  }

  public render(ctx: CanvasRenderingContext2D) {
    this.#points.forEach(p => p.render(ctx));
 }

 public update(deltaTheta: number) {
  this.#points.forEach(p => p.update(deltaTheta));
 }
}
