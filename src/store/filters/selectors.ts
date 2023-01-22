import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../store";

export const selectFiltersState = (state: RootState) => state.filteres;

export const selectFilter = createSelector(selectFiltersState, (f) => f.filter);
export const selectFiltBy = createSelector(selectFiltersState, (f) => f.filtBy);
