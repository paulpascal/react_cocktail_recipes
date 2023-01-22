import { useAppSelector } from "../../hooks/redux";
import { selectLogin } from "../../store/auth/selectors";
import { Navigate } from "react-router-dom";

import { Props } from "./types";

const PrivateRoute = ({ fbPath, component }: Props): JSX.Element => {
  const login = useAppSelector(selectLogin);
  const isLoggedIn = Boolean(login);

  if (isLoggedIn) {
    return component;
  }

  return <Navigate to={fbPath} />;
};

export default PrivateRoute;
