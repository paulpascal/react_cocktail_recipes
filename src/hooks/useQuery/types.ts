import { FiltBy } from "../../store/filters/types";

export type Query = {
  [key: string]: string[];
};

export type SearchQuery = {
  search: string;
  filter?: string[];
  filtBy: FiltBy;
};
