declare module "simplex-noise" {
  class SimplexNoise {
    constructor(random?: () => number);
    noise2D(xin: number, yin: number): number;
    noise3D(xin: number, yin: number, zin: number): number;
    noise4D(xin: number, yin: number, zin: number, win: number): number;
  }

  export = SimplexNoise;
}
