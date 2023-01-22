export type Sizes = {
  thin: number;
  xxs: number;
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
  giant: number;
};

export type Size = keyof Sizes;

export type Props = { size: Size };
