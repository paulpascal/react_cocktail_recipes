import s from "./Content.module.css";
import { ContentProps } from "./types";

const Content = ({ children }: ContentProps) => (
  <div className={s.content}>{children}</div>
);

export default Content;
