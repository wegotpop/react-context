import React from "react";

interface BContext {
  staticString: "some static text";
}

const BContext = React.createContext({} as BContext);

interface ProviderProps {
  children: React.ReactNode;
}

export function BProvider({ children }: ProviderProps) {
  return (
    <BContext.Provider value={{ staticString: "some static text" }}>
      {children}
    </BContext.Provider>
  );
}

export function useBContext() {
  return React.useContext(BContext);
}
