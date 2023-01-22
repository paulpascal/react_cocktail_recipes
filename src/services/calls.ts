import { AxiosError } from "axios";
import { axiosCocktailApi } from "./cocktailApi";
import { getCocktailUrl } from "../utils/helpers";

import {
  CatList,
  IngrList,
  GlassList,
  GetCocktailById,
  SuggestCocktailsByName,
  AlcList,
} from "./types";
import { Cocktail } from "../store/cocktails/types";

export const getCocktailById: GetCocktailById = (id) => {
  return axiosCocktailApi
    .get(`/lookup.php?i=${id}`)
    .then((response) => {
      const drinks = response.data?.drinks;
      if (Array.isArray(drinks)) {
        if (drinks.length !== 0) {
          return { data: drinks[0] };
        }
      }
    })
    .catch((axiosError) => {
      let err: AxiosError = axiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    });
};

export const suggestCocktailsByName: SuggestCocktailsByName = (
  searchText,
  limit,
) => {
  return axiosCocktailApi
    .get(`/search.php?s=${searchText}`)
    .then((response) => {
      if (Array.isArray(response.data?.drinks)) {
        let list = response.data.drinks;
        list = list.length <= limit ? list : list.slice(0, limit);
        return list.map((cocktail: Cocktail) => ({
          id: cocktail.idDrink,
          name: cocktail.strDrink,
          url: getCocktailUrl(cocktail.idDrink),
        }));
      }
      return [];
    })
    .catch(() => {
      throw new Error(
        "Server error while fetching cocktail search suggestions.",
      );
    });
};

export async function getCategories(): Promise<string[]> {
  return axiosCocktailApi
    .get(`/list.php?c=list`)
    .then((response) => {
      const catList: CatList | undefined = response.data?.drinks;
      if (catList && Array.isArray(catList)) {
        const cats = catList.map((v) => v.strCategory);
        return cats;
      }
      return [];
    })
    .catch((axiosError) => {
      let err: AxiosError = axiosError;
      console.error(err.message);
      return [];
    });
}

export async function getIngredients(): Promise<string[]> {
  return axiosCocktailApi
    .get(`/list.php?i=list`)
    .then((response) => {
      const ingrList: IngrList | undefined = response.data?.drinks;
      if (ingrList && Array.isArray(ingrList)) {
        const ingrArr = ingrList.map((v) => v.strIngredient1);
        return ingrArr;
      }
      return [];
    })
    .catch((axiosError) => {
      let err: AxiosError = axiosError;
      console.error(err.message);
      return [];
    });
}

export async function getGlasses(): Promise<string[]> {
  return axiosCocktailApi
    .get(`/list.php?g=list`)
    .then((response) => {
      const gList: GlassList | undefined = response.data?.drinks;
      if (gList && Array.isArray(gList)) {
        const gArr = gList.map((v) => v.strGlass);
        return gArr;
      }
      return [];
    })
    .catch((axiosError) => {
      let err: AxiosError = axiosError;
      console.error(err.message);
      return [];
    });
}

export async function getAlcoholic(): Promise<string[]> {
  return axiosCocktailApi
    .get(`/list.php?a=list`)
    .then((response) => {
      const aList: AlcList | undefined = response.data?.drinks;
      if (aList && Array.isArray(aList)) {
        const aArr = aList.map((v) => v.strAlcoholic);
        return aArr;
      }
      return [];
    })
    .catch((axiosError) => {
      let err: AxiosError = axiosError;
      console.error(err.message);
      return [];
    });
}
