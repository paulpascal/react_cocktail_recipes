/* eslint no-param-reassign: "off" */
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { searchCocktailsByName, searchCocktailsByFilter } from "./thunks";

import { Cocktail, CocktailsInitState, CocktailShort } from "./types";

export const cocktailsAdapter = createEntityAdapter({
  selectId: (cocktail: Cocktail | CocktailShort) => cocktail.idDrink,
});

const initState: CocktailsInitState = {
  total: 0,
  status: "initial",
  error: null,
};

const initialState =
  cocktailsAdapter.getInitialState<CocktailsInitState>(initState);

const cocktailsSlice = createSlice({
  name: "cocktails",
  initialState,
  reducers: {
    RESET: (state) => {
      cocktailsAdapter.removeAll(state);
      state.total = initState.total;
      state.status = initState.status;
      state.error = initState.error;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchCocktailsByName.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(searchCocktailsByName.fulfilled, (state, action) => {
      state.status = "success";
      if (Array.isArray(action.payload)) {
        cocktailsAdapter.setAll(state, action.payload);
        state.total = action.payload.length;
      }
    });
    builder.addCase(searchCocktailsByName.rejected, (state, action) => {
      if (state.status === "loading") {
        state.status = "error";
        state.error =
          action.error?.message || "Error fetching cocktails search data.";
      }
    });
    builder.addCase(searchCocktailsByFilter.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(searchCocktailsByFilter.fulfilled, (state, action) => {
      state.status = "success";
      if (Array.isArray(action.payload)) {
        cocktailsAdapter.setAll(state, action.payload);
        state.total = action.payload.length;
      }
    });
    builder.addCase(searchCocktailsByFilter.rejected, (state, action) => {
      if (state.status === "loading") {
        state.status = "error";
        state.error =
          action.error?.message || "Error fetching cocktails search data.";
      }
    });
  },
});

export const { RESET: resetCocktailsState } = cocktailsSlice.actions;

export default cocktailsSlice.reducer;
