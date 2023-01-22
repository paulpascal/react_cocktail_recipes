import { FavItem } from "../../hooks/useUserData/types";
import { ToggleFav, GetFavs } from "../../hooks/useUserData/types";

export type FavsPageState = {
  cocktails: Array<[string, FavItem]> | undefined;
  toggleFav: ToggleFav | undefined;
  getFavs: GetFavs | undefined;
};
