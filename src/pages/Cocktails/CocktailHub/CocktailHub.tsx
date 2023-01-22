import { useAppSelector } from "../../../hooks/redux";
import { selectCocktailsState } from "../../../store/cocktails/selectors";
import { Card } from "../../../components";
import { getCocktailUrl } from "../../../utils/helpers";
import { selectFavs } from "../../../store/auth/selectors";
import { Spinner } from "../../../components";

import { FilterFn, Props } from "./types";
import s from "./CocktailHub.module.css";

function CocktailHub({ search }: Props) {
  const favs = useAppSelector(selectFavs);
  const { cocktails, status, error } = useAppSelector(selectCocktailsState);

  const filterFn: FilterFn = (c) => {
    const name = c.strDrink.toLocaleLowerCase();
    const filter = search.toLocaleLowerCase();
    return name.includes(filter);
  };

  if (status === "loading") return <Spinner />;

  if (status === "error") {
    console.error(error);
    return <p>Oops, something went wrong..</p>;
  }

  let filtered = cocktails
    .filter(filterFn)
    .map((v) => (
      <Card
        key={v.idDrink}
        id={v.idDrink}
        name={v.strDrink}
        showName
        url={getCocktailUrl(v.idDrink)}
        image={v.strDrinkThumb}
        isFav={v.idDrink in favs}
      />
    ));

  return (
    <div className={s.cardHubOuter}>
      {filtered.length ? (
        <div className={s.cardHub}>{filtered}</div>
      ) : (
        <h3>No cocktails found matching your search.</h3>
      )}
    </div>
  );
}

export default CocktailHub;
