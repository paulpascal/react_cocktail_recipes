import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { selectFiltersState } from "../../store/filters/selectors";
import { setFiltBy, resetFilters } from "../../store/filters/filtersSlice";
import { SelectBy } from "../";
import Filters from "./Filters/Filters";

import { SingleValue } from "react-select";
import { FiltByOption } from "../../store/filters/types";
import s from "./MainFilter.module.css";

function MainFilter() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFiltersState);

  return (
    <div className={s.outer}>
      <div className={s.inner}>
        <SelectBy onChange={onSelectByChange} filtBy={filters.filtBy} />
        <Filters filters={filters} />
      </div>
    </div>
  );

  function onSelectByChange(data: SingleValue<FiltByOption>) {
    dispatch(resetFilters());
    dispatch(setFiltBy(data?.value || ""));
  }
}

export default MainFilter;
