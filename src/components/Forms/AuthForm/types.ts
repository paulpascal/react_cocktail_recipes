import { ChangeHandler, FieldError } from "react-hook-form";

export type Props = {
  title: string;
  type: "signin" | "register";
  submitFormHandler: (data: FormValues) => void;
};

export type FormValues = {
  login: string;
  password: string;
};

export type Errors = {
  login?: FieldError | undefined;
  password?: FieldError | undefined;
};

export type FormRegister = {
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  name: string;
  ref: React.Ref<any>;
};
