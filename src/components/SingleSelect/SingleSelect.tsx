import AsyncSelect from "react-select/async";
import { getDefMultiSelect } from "../../utils/helpers";

import { Props } from "./types";

function SingleSelect({ loadOptions, onChangeHandler, label, filter }: Props) {
  return (
    <AsyncSelect
      placeholder={`Select ${label}`}
      loadOptions={loadOptions}
      onChange={onChangeHandler}
      cacheOptions
      defaultOptions
      defaultValue={getDefMultiSelect(filter)}
    />
  );
}

export default SingleSelect;
