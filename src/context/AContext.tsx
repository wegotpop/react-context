import React from "react";
import { useHasReRendered } from "../hooks/useHasReRendered.ts";

interface AContext {
  aFunc: () => void;
  aState: boolean;
  staticString: "some static text";
}

const AContext = React.createContext({} as AContext);

interface ProviderProps {
  children: React.ReactNode;
  initialState: boolean;
}

export function AProvider({ children, initialState }: ProviderProps) {
  useHasReRendered("AProvider");

  const [internalState, setInternalState] = React.useState(initialState);

  function updateState() {
    setInternalState((prevState) => !prevState);
  }

  const staticString = "some static text";

  return (
    <AContext.Provider
      value={{ aFunc: updateState, aState: internalState, staticString }}
    >
      {children}
    </AContext.Provider>
  );
}

export function useAContext() {
  return React.useContext(AContext);
}
