import { PolarCoordinate } from './PolarCoordinate/PolarCoordinate.type.ts';
import { CartesianCoordinate } from './CartesianCoordinate/CartesianCoordinate.type.ts';

export type Coordinate = {
  polar: PolarCoordinate;
  cartesian: CartesianCoordinate;
};
