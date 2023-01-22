import { useAppDispatch } from "../../hooks/redux";
import { useNavigate } from "react-router";
import useLoginData from "../../hooks/useLoginData/useLoginData";
import { AuthForm } from "../../components";
import { signIn as setAuth } from "../../store/auth/authSlice";

import { FormValues } from "../../components/Forms/AuthForm/types";
import s from "./SigninPage.module.css";

function SigninPage() {
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const { signIn } = useLoginData();

  const submitFormHandler = (data: FormValues) => {
    if (signIn(data.login)) {
      dispatch(setAuth(data.login));
      nav("/", { replace: true });
    } else {
      alert("Invalid login or password!");
    }
  };

  return (
    <div className={s.outer}>
      <div className={s.form}>
        <AuthForm
          title="Sign into your account:"
          type="signin"
          submitFormHandler={submitFormHandler}
        />
      </div>
    </div>
  );
}

export default SigninPage;
