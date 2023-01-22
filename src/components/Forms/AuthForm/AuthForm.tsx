import { useForm, SubmitHandler } from "react-hook-form";
import { nopeResolver } from "@hookform/resolvers/nope";
import { Space } from "../..";
import FormInput from "../FormInput/FormInput";
import { BasicAuthSchema } from "../shemas/BasicAuthSchema";

import { FormValues, Props } from "./types";
import s from "../Form.module.css";

export default function AuthForm({ title, type, submitFormHandler }: Props) {
  const defaultValues: FormValues = {
    login: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: nopeResolver(BasicAuthSchema),
    mode: "onTouched",
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => submitFormHandler(data);

  return (
    <form id="form" className={s.formOuter} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.formTitle}>{title}</div>
      <FormInput
        tag="login"
        label="Login:"
        register={register}
        errors={errors}
      />
      <FormInput
        tag="password"
        label="Password:"
        register={register}
        errors={errors}
      />
      <Space size="s" />
      <button className={s.formButton} type="submit" disabled={isSubmitting}>
        {type === "register" && "Register"}
        {type === "signin" && "Sign in"}
      </button>
    </form>
  );
}
