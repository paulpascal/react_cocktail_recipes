import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/redux";
import { useNavigate } from "react-router";
import { signOut } from "../../../store/auth/authSlice";

import { Props } from "./types";
import s from "./UserPanel.module.css";

function UserPanel({ login }: Props) {
  if (!login) return null;

  const dispatch = useAppDispatch();
  const nav = useNavigate();

  function onSignOut() {
    dispatch(signOut());
    nav("/");
  }

  return (
    <div className={s.outer}>
      <div className={s.inner}>
        <Link className={s.link} to="/history">
          History
        </Link>
        <Link className={s.link} to="/favs">
          Favorites
        </Link>
        <div className={s.info}>
          {login}
          {" | "}
          <button className={s.sOutBtn} type="button" onClick={onSignOut}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserPanel;
