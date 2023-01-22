import { Cocktail, CocktailShort } from "../../../store/cocktails/types";

export type Props = {
  search: string;
};

export type FilterFn = (c: Cocktail | CocktailShort) => boolean;
