import { ReactNode } from "hoist-non-react-statics/node_modules/@types/react";

export type AppContextData = {
  theme: "dark" | "light";
};

export type Props = {
  children: ReactNode;
};
