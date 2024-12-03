import { createContext } from "react";

const WhatsAppContext = createContext();

export const WhatsAppContextProvider = ([children]) => { 
    return (
        <WhatsAppContext.Provider>
            {children}
        </WhatsAppContext.Provider>
    )}