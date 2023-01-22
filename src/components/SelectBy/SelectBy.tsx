import Select from "react-select";
import { useLayoutEffect, useState } from "react";
import { getDefSelectBy } from "../../utils/helpers";

import { FiltByOption } from "../../store/filters/types";
import { Props } from "./types";

const options: FiltByOption[] = [
  { value: "i", label: "Ingredients" },
  { value: "c", label: "Categories" },
  { value: "g", label: "Glasses" },
  { value: "a", label: "Alcohol" },
];

function SelectBy({ onChange, filtBy }: Props) {
  return (
    <Select
      placeholder="Filter by..."
      options={options}
      onChange={onChange}
      isClearable
      defaultValue={getDefSelectBy(options, filtBy)}
    />
  );
}

export default SelectBy;
