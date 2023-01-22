import useUserData from "../../hooks/useUserData/useUserData";

import { Middleware } from "redux";

export const AUTH_ACTIONS = ["auth/ADDED_HISTORY", "auth/TOGGLED_FAV"];
export const FALLBACK_URL = "/register";

const authGuard: Middleware = (store) => (next) => (action) => {
  const state = store.getState();
  const login = state.auth.login;
  const isAuthAction = AUTH_ACTIONS.includes(action.type);

  if (isAuthAction) {
    if (login) {
      const { toggleFav, addHistory } = useUserData(login);
      switch (action.type) {
        case "auth/ADDED_HISTORY": {
          addHistory(action.payload);
          break;
        }
        case "auth/TOGGLED_FAV": {
          toggleFav(action.payload.id, action.payload.fav);
          break;
        }
      }
    } else {
      return FALLBACK_URL;
    }
  }
  next(action);
};

export default authGuard;
