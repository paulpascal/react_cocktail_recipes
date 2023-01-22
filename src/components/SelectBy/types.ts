import { SingleValue } from "react-select";
import { FiltBy, FiltByOption } from "../../store/filters/types";

export type Props = {
  onChange: (data: SingleValue<FiltByOption>) => void;
  filtBy: FiltBy;
};
