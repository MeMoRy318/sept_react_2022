import {createContext, useReducer} from "react";
import {initial, myUserReducer} from "../reducers";

const StateContext = createContext(null);


const StateProvider = ({children}) => {

    const userReducer = useReducer(myUserReducer,null,initial)

    const reducers = {

         userReducer,
    }

    return (
        <StateContext.Provider value={reducers}>
            {children}
        </StateContext.Provider>
    );
};

export {StateProvider,StateContext};