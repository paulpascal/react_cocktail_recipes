import { Link } from "react-router-dom";
import { Suggestions } from "../types";

import s from "./SuggestBox.module.css";

function SuggestBox(props: { suggestions: Suggestions; isVisible: boolean }) {
  const { suggestions: list, isVisible } = props;

  if (list.length === 0 || !isVisible) return null;

  return (
    <div className={s.outer}>
      {list.map((item) => (
        <li key={item.id} className={s.listItem}>
          <Link className={s.listItemLink} to={item.url}>
            {item.name}
          </Link>
        </li>
      ))}
    </div>
  );
}

export default SuggestBox;
