type Cartestian = {
  x: number;
  y: number;
};

type Polar = {
  theta: number;
  distance: number;
};

export interface IStarPoint {
  polar: Polar;
  cartesian?: Cartestian;
  velocity?: number;
  opacity: number;

  convertRtoD?: () => number;
}
