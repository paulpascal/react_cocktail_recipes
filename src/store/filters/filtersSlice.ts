/* eslint no-param-reassign: "off" */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FiltBy, Filter, InitialState, StateUpdate } from "./types";

export const FILTERS: FiltBy[] = ["i", "c", "g", "a", ""];

export const initialState: InitialState = {
  filter: [],
  filtBy: "",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    SET_FILTER_STATE: (state, action: PayloadAction<StateUpdate>) => {
      const { filter, filtBy } = action.payload;
      state.filtBy = filtBy;
      state.filter = typeof filter === "string" ? [filter] : filter;
    },
    SET_FILTER: (state, action: PayloadAction<Filter | string>) => {
      const filter = action.payload;
      state.filter = typeof filter === "string" ? [filter] : filter;
    },
    SET_FILT_BY: (state, action: PayloadAction<FiltBy>) => {
      state.filtBy = action.payload;
    },
    RESET: () => initialState,
  },
});

export const {
  SET_FILTER_STATE: setFilterState,
  SET_FILTER: setFilter,
  SET_FILT_BY: setFiltBy,
  RESET: resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
