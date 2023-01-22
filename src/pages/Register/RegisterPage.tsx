import { useAppDispatch } from "../../hooks/redux";
import { useNavigate } from "react-router";
import useLoginData from "../../hooks/useLoginData/useLoginData";
import { signIn } from "../../store/auth/authSlice";
import { AuthForm } from "../../components";

import { FormValues } from "../../components/Forms/AuthForm/types";
import s from "./RegisterPage.module.css";

function RegisterPage() {
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  const { register } = useLoginData();

  const submitFormHandler = (data: FormValues) => {
    if (register(data.login, data.password)) {
      nav("/", { replace: true });
      dispatch(signIn(data.login));
    } else {
      alert("Invalid login/password!");
    }
  };

  return (
    <div className={s.outer}>
      <div className={s.form}>
        <AuthForm
          title="Create a new account:"
          type="register"
          submitFormHandler={submitFormHandler}
        />
      </div>
    </div>
  );
}

export default RegisterPage;
