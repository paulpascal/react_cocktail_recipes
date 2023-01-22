import useLocalStorage from "../useLocalStorage/useLocalStorage";
import { MAX_HISTORY } from "../../store/auth/authSlice";

import { FavItem, HistoryItem, UseUserData } from "./types";

const useUserData: UseUserData = function useUserData(login: string) {
  const [getUsers, setUsers] = useLocalStorage("users");

  function getUsersData() {
    const users = getUsers();
    if (!login || !users || typeof users !== "object" || Array.isArray(users))
      return;

    return users;
  }

  function getFavs(): { [id: string]: FavItem } {
    const users = getUsersData();
    if (!users || !users[login]) return {};

    return users[login]["favs"];
  }

  function toggleFav(id: string, fav: FavItem): void {
    const users = getUsersData();
    if (!users || !users[login] || !users[login]["favs"]) return;

    const favs = users[login]["favs"];

    if (id in favs) {
      delete favs[id];
    } else {
      favs[id] = fav;
    }

    setUsers(users);
  }

  function getHistory(): Array<HistoryItem> {
    const users = getUsersData();
    if (!users || !users[login]) return [];

    return users[login]["history"];
  }

  function addHistory(entry: HistoryItem): void {
    const users = getUsersData();
    if (!users || !users[login]) return;

    const history = users[login]["history"];

    history.unshift(entry);

    if (history.length > MAX_HISTORY) {
      history.pop();
    }

    setUsers(users);
  }

  return {
    getHistory,
    addHistory,
    getFavs,
    toggleFav,
  };
};

export default useUserData;
