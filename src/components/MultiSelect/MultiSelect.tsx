import AsyncSelect from "react-select/async";
import {
  OptionProps,
  components,
  CSSObjectWithLabel,
  StylesConfig,
  MenuProps,
} from "react-select";
import { getDefMultiSelect } from "../../utils/helpers";

import { Props } from "./types";
import { SelOption } from "../../utils/types";
import s from "./MultiSelect.module.css";

const SELECT_LIMIT = 3;

const STYLES: StylesConfig<SelOption> = {
  input: (css: CSSObjectWithLabel) => ({
    ...css,
    flex: "0",
    width: "10px",
  }),
  valueContainer: (css: CSSObjectWithLabel) => ({
    ...css,
    justifyContent: "center",
    flexWrap: "nowrap",
    flex: "1",
  }),
};

const Menu: any = (props: MenuProps) => {
  const selected = props.getValue().length || 0;
  return (
    <components.Menu {...props}>
      {selected < SELECT_LIMIT ? (
        props.children
      ) : (
        <div>{`Max ${SELECT_LIMIT} filters.`}</div>
      )}
    </components.Menu>
  );
};

function MultiSelect({ loadOptions, onChangeHandler, label, filter }: Props) {
  const Option: any = (props: OptionProps) => {
    return (
      <components.Option {...props}>
        <div className={s.option}>
          <input
            type="checkbox"
            checked={props.isSelected || filter.includes(props.label)}
            onChange={() => null}
          />
          <label>{props.label}</label>
        </div>
      </components.Option>
    );
  };

  return (
    <AsyncSelect
      className={s.select}
      styles={STYLES}
      components={{ Option, Menu }}
      placeholder={`Select ${label}`}
      isMulti
      isClearable
      defaultOptions
      defaultValue={getDefMultiSelect(filter)}
      cacheOptions
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      loadOptions={loadOptions}
      onChange={onChangeHandler}
    />
  );
}

export default MultiSelect;
