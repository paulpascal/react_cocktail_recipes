import { useAppSelector } from "../../hooks/redux";
import { selectHistory } from "../../store/auth/selectors";
import { HistoryLine } from "../../components";
import { MAX_HISTORY } from "../../store/auth/authSlice";

import s from "./HistoryPage.module.css";

function HistoryPage() {
  const history = useAppSelector(selectHistory);

  return (
    <div className={s.outer}>
      <div className={s.title}>
        <h2>My latest {MAX_HISTORY} recipes searches:</h2>
      </div>
      <hr />
      <div className={s.histOuter}>
        <div className={s.histInner}>
          <div className={s.histList}>
            {history.length ? (
              history.map((v) => (
                <HistoryLine
                  key={v.date}
                  date={v.date}
                  url={v.url}
                  search={v.search}
                />
              ))
            ) : (
              <span>No searches yet..</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryPage;
