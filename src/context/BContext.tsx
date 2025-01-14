import React from "react";

interface BContext {
    aFunc: () => void;
    aState: boolean;
}

const BContext = React.createContext({} as BContext);

interface ProviderProps {
    children: React.ReactNode;
    initialState: boolean
}

export function BProvider({ children, initialState }: ProviderProps) {

    const [internalState, setInternalState] = React.useState(initialState);

    function updateState() {
        setInternalState((prevState) => !prevState)
    }

    return <BContext.Provider value={{aFunc: updateState, aState: internalState}}>{children}</BContext.Provider>;
}

export function useBContext() {
    return React.useContext(BContext);
}