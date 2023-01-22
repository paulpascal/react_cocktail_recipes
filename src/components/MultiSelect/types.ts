import { MultiValue } from "react-select";
import { SelOption } from "../../utils/types";

export type Props = {
  loadOptions: () => Promise<SelOption[]>;
  onChangeHandler: (data: MultiValue<SelOption>) => void;
  label: string;
  filter: string[];
};
