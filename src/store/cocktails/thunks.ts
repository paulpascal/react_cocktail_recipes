import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosCocktailApi } from "../../services/cocktailApi";
import { SearchQuery } from "../../hooks/useQuery/types";
import { getPromiseArr } from "../../utils/helpers";

export const searchCocktails = createAsyncThunk(
  "cocktails/searchCocktails",
  async (sQ: SearchQuery, { dispatch }) => {
    sQ.filtBy
      ? dispatch(searchCocktailsByFilter(sQ))
      : dispatch(searchCocktailsByName(sQ["search"]));
  },
);

export const searchCocktailsByName = createAsyncThunk(
  "cocktails/searchCocktailsByName",
  async (searchText: string) => {
    const response = await axiosCocktailApi.get(`/search.php?s=${searchText}`);
    if (Array.isArray(response.data.drinks)) {
      return response.data.drinks;
    }
  },
);

export const searchCocktailsByFilter = createAsyncThunk(
  "cocktails/searchCocktailsByFilter",
  async (sQ: SearchQuery) => {
    if (sQ.filtBy === "a") {
      const response = await axiosCocktailApi.get(`/filter.php?a=${sQ.filter}`);
      if (Array.isArray(response.data.drinks)) {
        return response.data.drinks;
      }
    } else {
      const response = await Promise.all(getPromiseArr(sQ));
      const data = response.flat();
      return data;
    }
  },
);
