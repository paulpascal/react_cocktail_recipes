import { InputLine } from "../..";

import s from "../Form.module.css";
import { Props } from "./types";

const FormInput = ({ tag, label, register, errors }: Props) => {
  return (
    <>
      <InputLine
        label={label}
        invalid={errors[tag] ? "true" : "false"}
        {...register(tag)}
      />
      {errors[tag] && <div className={s.formError}>{errors[tag]?.message}</div>}
    </>
  );
};

export default FormInput;
