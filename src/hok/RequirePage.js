import {createContext, useState} from "react";

const ContextProvider =  createContext(null);

const RequirePage = ({children}) => {

   const [loginStatus,setLoginStatus] = useState(false);

    return (
        <ContextProvider.Provider value={{loginStatus,setLoginStatus}}>
            {children}
        </ContextProvider.Provider>
    );
};

export {RequirePage,ContextProvider};