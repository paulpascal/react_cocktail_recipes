export type InitialState = {
  filter: string[];
  filtBy: FiltBy;
};

export type StateUpdate = {
  filter: string | string[];
  filtBy: FiltBy;
};

export type Filter = string[];
export type AlcFilter = string | undefined;

export type FiltBy = "i" | "c" | "g" | "a" | "";
export type FiltByOption = {
  value: FiltBy;
  label: string;
};
