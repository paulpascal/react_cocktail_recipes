import { Cocktail } from "../store/cocktails/types";
import { Suggestions } from "../components/MainSearch/types";

export type GetCocktailById = (
  id: string,
) => Promise<
  | { data: Cocktail }
  | { error: { status: number | undefined; data: any } }
  | undefined
>;

export type SuggestCocktailsByName = (
  searchText: string,
  limit: number,
) => Promise<Suggestions>;

export type CatList = {
  strCategory: string;
}[];

export type IngrList = {
  strIngredient1: string;
}[];

export type GlassList = {
  strGlass: string;
}[];

export type AlcList = {
  strAlcoholic: string;
}[];
