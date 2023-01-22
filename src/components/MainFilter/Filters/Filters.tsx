import { useAppDispatch } from "../../../hooks/redux";
import { setFilter } from "../../../store/filters/filtersSlice";
import {
  getCategories,
  getIngredients,
  getGlasses,
  getAlcoholic,
} from "../../../services/calls";
import { SingleSelect, MultiSelect } from "../..";
import { getSelectOptions } from "../../../utils/helpers";

import { Props } from "./types";
import { MultiValue, SingleValue } from "react-select";
import { SelOption } from "../../../utils/types";

function Filters({ filters }: Props) {
  const dispatch = useAppDispatch();
  const { filter, filtBy } = filters;

  return (
    <>
      {filtBy === "i" && (
        <MultiSelect
          label={"ingredients..."}
          loadOptions={loadIngrOptions}
          onChangeHandler={onFilterChange}
          filter={filter}
        />
      )}
      {filtBy === "c" && (
        <MultiSelect
          label={"categories..."}
          loadOptions={loadCatOptions}
          onChangeHandler={onFilterChange}
          filter={filter}
        />
      )}
      {filtBy === "g" && (
        <MultiSelect
          label={"glasses..."}
          loadOptions={loadGlassOptions}
          onChangeHandler={onFilterChange}
          filter={filter}
        />
      )}
      {filtBy === "a" && (
        <SingleSelect
          label={"alcohol..."}
          loadOptions={loadAlcOptions}
          onChangeHandler={onAlcChange}
          filter={filter}
        />
      )}
    </>
  );

  function loadCatOptions() {
    return getCategories().then(getSelectOptions);
  }

  function loadIngrOptions() {
    return getIngredients().then(getSelectOptions);
  }

  function loadGlassOptions() {
    return getGlasses().then(getSelectOptions);
  }

  function loadAlcOptions() {
    return getAlcoholic().then(getSelectOptions);
  }

  function onFilterChange(data: MultiValue<SelOption>) {
    const filter = data.map((v) => v.value);
    dispatch(setFilter(filter));
  }

  function onAlcChange(data: SingleValue<SelOption>) {
    const filter = data ? data.value : "";
    dispatch(setFilter(filter));
  }
}

export default Filters;
