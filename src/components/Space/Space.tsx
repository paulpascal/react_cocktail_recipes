import { Props, Sizes } from "./types";

const SIZES: Sizes = {
  thin: 4,
  xxs: 8,
  xs: 16,
  s: 24,
  m: 32,
  l: 48,
  xl: 64,
  xxl: 96,
  giant: 128,
};

const Space = ({ size }: Props) => (
  <div
    className="filler"
    style={{ height: SIZES[size], minHeight: SIZES[size] }}
  />
);

export default Space;
