import { FormValues, Errors } from "../AuthForm/types";
import { UseFormRegister } from "react-hook-form";

export type Props = {
  tag: keyof FormValues;
  label: string;
  register: UseFormRegister<FormValues>;
  errors: Errors;
};
