import { memo } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

import { Props } from "./types";
import s from "./HistoryLine.module.css";

function HistoryLine({ date, search, url }: Props) {
  const myDate = format(new Date(date), "HH:mm dd/MM/yy");

  return (
    <div className={s.outer}>
      <Link className={s.inner} to={url}>
        <div className={s.date}>{`${myDate}`}</div>
        <div className={s.search}> {`${search}`}</div>
      </Link>
    </div>
  );
}

export default memo(HistoryLine);
