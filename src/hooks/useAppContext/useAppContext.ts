import React from "react";

import { AppContext } from "../../context/AppContext";

export default function useAppContext() {
  const context = React.useContext(AppContext);

  if (context === undefined) {
    throw new Error("AppContext must be used within an AppContext.Provider");
  }
  return context;
}
