import React from "react";
import { ChangeHandler } from "react-hook-form";

export type Props = {
  label: string;
  ref: React.Ref<any>;
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  name: string;
  invalid: "true" | "false";
};
