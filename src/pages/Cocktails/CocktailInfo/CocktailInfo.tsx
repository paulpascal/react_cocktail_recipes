import { useAppSelector } from "../../../hooks/redux";
import { useLocation } from "react-router";
import { selectFavs } from "../../../store/auth/selectors";
import { useGetCocktailByIdQuery } from "../../../services/cocktailApi";
import { Card } from "../../../components";
import { getIngr } from "../../../utils/helpers";

import s from "./CocktailInfo.module.css";

type Props = { id: string };

function CocktailInfo({ id }: Props) {
  let { data, error, isLoading } = useGetCocktailByIdQuery(id);
  const loc = useLocation();
  const favs = useAppSelector(selectFavs);

  if (error) {
    return <h2>Oops, something went wrong..</h2>;
  }

  if (!isLoading && !data) {
    return <h2>Cocktail not found.</h2>;
  }

  return (
    <div className={s.outer}>
      {data && (
        <div className={s.outer}>
          <h2 className={s.title}>{data.strDrink}</h2>
          <Card
            id={data.idDrink}
            name={data.strDrink}
            url={loc.pathname}
            image={data.strDrinkThumb}
            showName={false}
            isFav={data.idDrink in favs}
          />
          <h3>Instructions:</h3>
          <p>{data.strInstructions}</p>
          <ul className={s.iList}>
            <h3>Ingredients:</h3>
          </ul>
          <p>
            {getIngr(data).map((i) => (
              <li key={i}>{i}</li>
            ))}
          </p>
        </div>
      )}
    </div>
  );
}

export default CocktailInfo;
