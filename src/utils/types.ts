import { CocktailShort } from "../store/cocktails/types";
import { FiltBy, FiltByOption } from "../store/filters/types";

export type SelOption = {
  value: string;
  label: string;
  color?: string;
  isFixed?: boolean;
  isDisabled?: boolean;
};

export type CocktailPromise = Promise<CocktailShort[]>;

export type GetDefSelectBy = (
  ops: FiltByOption[],
  val: FiltBy,
) => FiltByOption | undefined;

export type GetDefMultiSelect = (filter: string[]) => SelOption[] | undefined;
