import { Card } from "../../../components";
import { getCocktailUrl } from "../../../utils/helpers";

import { Props } from "./types";
import s from "./FavsHub.module.css";

function FavsHub({ favsArr }: Props) {
  return (
    <div className={s.cardHubOuter}>
      <div className={s.cardHub}>
        {favsArr.map((item) => {
          const [id, fav] = item;
          return (
            <Card
              key={id}
              id={id}
              name={fav.name}
              showName
              url={getCocktailUrl(id)}
              image={fav.image}
              isFav={true}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FavsHub;
