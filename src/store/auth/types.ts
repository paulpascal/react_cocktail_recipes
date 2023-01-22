export type InitialState = {
  login: string | undefined;
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
