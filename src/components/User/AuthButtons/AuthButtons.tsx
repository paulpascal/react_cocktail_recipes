import { Link } from "react-router-dom";

import s from "./AuthButtons.module.css";

function AuthButtons() {
  return (
    <div className={s.outer}>
      <button className={s.signInBtn} type="button">
        <Link to="./signin">Sign In</Link>
      </button>
      <button className={s.regBtn} type="button">
        <Link to="./register">Register</Link>
      </button>
    </div>
  );
}

export default AuthButtons;
