import { forwardRef } from "react";

import { Props } from "./types";
import s from "./InputLine.module.css";

const InputLine = forwardRef((props: Props, ref: React.Ref<any>) => (
  <div className={s.wrapper}>
    <label className={s.label}>{props.label}</label>
    <input {...props} ref={ref} className={s.input} type="text" />
    <span className={s.underline}></span>
  </div>
));

export default InputLine;
