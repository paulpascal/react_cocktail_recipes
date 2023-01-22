export type Entry = string | { [key: string]: User } | Array<string>;

export type User = {
  password: string;
  favs: { [id: string]: FavItem };
  history: Array<HistoryItem>;
};

export type FavItem = {
  name: string;
  image: string;
};

export type HistoryItem = {
  date: string;
  search: string;
  url: string;
};

export type UseUserData = (login: string) => {
  getHistory: GetHistory;
  addHistory: AddHistory;
  getFavs: GetFavs;
  toggleFav: ToggleFav;
};

export type ToggleFav = (id: string, fav: FavItem) => void;
export type AddHistory = (entry: HistoryItem) => void;
export type GetFavs = () => { [id: string]: FavItem };
export type GetHistory = () => HistoryItem[];
export type CheckFav = (id: string) => boolean;
