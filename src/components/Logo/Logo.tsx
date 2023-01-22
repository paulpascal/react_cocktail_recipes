import { memo } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../images/logo.jpg";

import s from "./Logo.module.css";

function Logo() {
  return (
    <div className={s.logoOuter}>
      <div className={s.info}>
        <Link className={s.link} to="/">
          <p className={s.logo}>YourCocktail</p>
        </Link>
        <span className=Drinks and cocktails from around the world!</span>
      </div>
    </div>
  );
}

export default memo(Logo);
