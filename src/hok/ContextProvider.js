import {createContext, useState} from "react";

const ContextLogin = createContext(null);


const ContextProvider = ({children}) => {


    const [login,setLogin] = useState(false)


    return (
        <ContextLogin.Provider value={{login,setLogin}}>
            {children}
        </ContextLogin.Provider>
    );
};

export {ContextProvider,ContextLogin};