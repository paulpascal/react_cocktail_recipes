import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../store";

export const selectAuthState = (state: RootState) => state.auth;

export const selectLogin = createSelector(
  selectAuthState,
  (auth) => auth.login,
);

export const selectFavs = createSelector(selectAuthState, (auth) => auth.favs);

export const selectHistory = createSelector(
  selectAuthState,
  (auth) => auth.history,
);
