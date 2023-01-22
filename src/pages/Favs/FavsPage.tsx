import { useAppSelector } from "../../hooks/redux";
import { selectFavs } from "../../store/auth/selectors";
import FavsHub from "./FavsHub/FuvsHub";

import s from "./FavsPage.module.css";

function FavsPage() {
  const favs = useAppSelector(selectFavs);

  return (
    <div className={s.outer}>
      <div className={s.title}>
        <h2>My favorites:</h2>
        <hr />
      </div>
      <FavsHub favsArr={Object.entries(favs)} />
    </div>
  );
}

export default FavsPage;
