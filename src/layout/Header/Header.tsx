import { memo } from "react";
import { useAppSelector } from "../../hooks/redux";
import { selectLogin } from "../../store/auth/selectors";
import { AuthButtons, Logo, UserPanel } from "../../components";

import s from "./Header.module.css";

function Header() {
  const login = useAppSelector(selectLogin);

  return (
    <div className={s.outer}>
      <Logo />
      {login ? <UserPanel login={login} /> : <AuthButtons />}
    </div>
  );
}

export default memo(Header);
