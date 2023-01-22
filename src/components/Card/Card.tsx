import { memo, MouseEventHandler } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { toggleFav } from "../../store/auth/authSlice";
import { NavLink, useNavigate } from "react-router-dom";
import favImg from "../../images/fav.png";
import notFavImg from "../../images/notFav.png";

import { Props } from "./types";
import s from "./Card.module.css";

function Card({ id, name, url, image, showName, isFav }: Props) {
  const nav = useNavigate();
  const dispatch = useAppDispatch();

  const onFavClick: MouseEventHandler = (e) => {
    e.preventDefault();
    const fbUrl = dispatch(toggleFav({ id, fav: { name, image } }));
    if (typeof fbUrl === "string") {
      nav(fbUrl);
    }
  };

  return (
    <NavLink className={s.card} to={url}>
      {showName && <div className={s.cardTitle}>{name}</div>}
      <div className={s.cardImgOuter}>
        {isFav ? (
          <img
            className={s.cardFav}
            src={favImg}
            onClick={onFavClick}
            title="Remove from favs"
            aria-label="Remove from favs"
          />
        ) : (
          <img
            className={s.cardNotFav}
            src={notFavImg}
            onClick={onFavClick}
            title="Add to favs"
            aria-label="Add to favs"
          />
        )}
        <img className={s.cardImg} src={image} />
      </div>
    </NavLink>
  );
}

export default memo(Card);
