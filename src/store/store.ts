import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cocktailsSlice from "./cocktails/cocktailsSlice";
import filtersSlice from "./filters/filtersSlice";
import authSlice from "./auth/authSlice";
import { cocktailApi } from "../services/cocktailApi";
import authGuard from "./middleware/authGuard";

export const store = configureStore({
  reducer: {
    cocktails: cocktailsSlice,
    filteres: filtersSlice,
    auth: authSlice,
    [cocktailApi.reducerPath]: cocktailApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authGuard, cocktailApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
