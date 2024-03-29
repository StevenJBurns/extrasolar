import { IStarPoint } from './IStarPoint';

export interface IStarField {
  stars: Array<IStarPoint>;
}

export class StarFieldBackground {
  #points: Array<IStarPoint> = [];

  constructor(pointCount: number) {
    if (pointCount <= 0) throw new Error('StarField pointCount must be a positive integer');
    if (!Number.isInteger(pointCount)) throw new Error('StarField pointCount must be a positive integer');

    this.#points = Array(pointCount)
    .fill({
      polar: { theta: 0, distance: 1 },
      opacity: 1,
    })
    .map(() => ({
      polar: {
        theta: Math.random() * 2 * Math.PI,
        distance: Math.random() * 1024 + 8,
      },
      opacity: Math.random(),
    }));
  }

  public updatePointLocations() {
    this.#points.forEach(point => console.log({ point}));
  }
}
