/* eslint no-param-reassign: "off" */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import useUserData from "../../hooks/useUserData/useUserData";
import useLoginData from "../../hooks/useLoginData/useLoginData";

import { InitialState, FavItem, HistoryItem } from "./types";

export const MAX_HISTORY = 10;
const { getLastLogin, setLastLogin } = useLoginData();

export const initialState: InitialState = getInitState();

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SIGNED_IN: (state, action: PayloadAction<string>) => {
      const login = action.payload;
      const { getFavs, getHistory } = useUserData(login);
      setLastLogin(login);
      state.login = login;
      state.favs = getFavs();
      state.history = getHistory();
    },
    SIGNED_OUT: (state) => {
      setLastLogin("");
      state.login = undefined;
    },
    TOGGLED_FAV: (
      state,
      action: PayloadAction<{ id: string; fav: FavItem }>,
    ) => {
      const { id, fav } = action.payload;
      if (id in state.favs) {
        delete state.favs[id];
      } else {
        state.favs[id] = fav;
      }
    },
    ADDED_HISTORY: (state, action: PayloadAction<HistoryItem>) => {
      state.history.unshift(action.payload);

      if (history.length > MAX_HISTORY) {
        state.history.pop();
      }
    },
  },
});

function getInitState() {
  const login = getLastLogin();

  if (login) {
    const { getFavs, getHistory } = useUserData(login);
    return {
      login,
      favs: getFavs(),
      history: getHistory(),
    };
  }

  return {
    login: undefined,
    favs: {},
    history: [],
  };
}

export const {
  SIGNED_IN: signIn,
  SIGNED_OUT: signOut,
  ADDED_HISTORY: addHistory,
  TOGGLED_FAV: toggleFav,
} = authSlice.actions;

export default authSlice.reducer;
