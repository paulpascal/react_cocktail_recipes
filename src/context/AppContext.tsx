import React from "react";

import { AppContextData, Props } from "./types";

const context: AppContextData = {
  theme: "dark",
};

export const AppContext = React.createContext(context);

function AppContextProvider({ children }: Props) {
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

export { AppContextProvider };
