import React from 'react';
import { createContext, useState, useContext } from 'react';



export const AppContext = createContext<{ 
        isConnected: boolean;
        setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
        login: string;
        setLogin: React.Dispatch<React.SetStateAction<string>>;
        employees: {email:string, UAC:string, hasActivated:boolean}[];
        setEmployees: React.Dispatch<React.SetStateAction<{email:string, UAC:string, hasActivated:boolean}[]>>;
    }>({ 
        isConnected: false,
        setIsConnected: () => {},
        login: "",
        setLogin: () => {},
        employees: [],
        setEmployees: () => {}
    });



export function AppProvider({ children }: { children: React.ReactNode }): JSX.Element {

    const [isConnected, setIsConnected] = useState(false);
    const [login, setLogin] = useState("");
    const [employees, setEmployees] = useState<{email:string, UAC:string, hasActivated:boolean}[]>([]);

    return (
        <AppContext.Provider value={{ isConnected, setIsConnected, login, setLogin, employees, setEmployees }}>
            {children}
        </AppContext.Provider>
    )

}

export const useAppContext = () => useContext(AppContext);


export default AppContext;