import { SingleValue } from "react-select";
import { SelOption } from "../../utils/types";

export type Props = {
  loadOptions: () => Promise<SelOption[]>;
  onChangeHandler: (data: SingleValue<SelOption>) => void;
  label: string;
  filter: string[];
};
