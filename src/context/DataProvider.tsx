import React, { createContext, useState } from "react";

interface Props {
    children?: React.ReactNode
}
interface Context{
    state: boolean,
    setstate: React.Dispatch<React.SetStateAction<boolean>> 
}

export const DataContext = createContext<Context | null>(null);

export const DataProvider = ({children}: Props) => {

    const [state, setstate] = useState(false);

    return (
        <DataContext.Provider value={{state, setstate}}>
            {children}
        </DataContext.Provider>
    )
}