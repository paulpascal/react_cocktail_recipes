export type MainSearchProps = {
  getSuggestionsAsync: (
    searchText: string,
    limit: number,
  ) => Promise<Suggestions>;
};

export type Suggestions = Array<{
  id: string;
  name: string;
  url: string;
}>;
