import {createContext, useReducer} from "react";

import {catInitValue, catReducer, dogInitValue, dogReducer, loginInitValue, loginReducer,} from "../reducers";

const  Context = createContext(null);

const ReducerProvider = ({children}) => {

    const dogReducers = useReducer(dogReducer,null,dogInitValue);
    const catReducers = useReducer(catReducer,null,catInitValue);
    const loginReducers = useReducer(loginReducer,null,loginInitValue);




    return (
        <Context.Provider value={{catReducers,dogReducers,loginReducers}}>
            {children}
        </Context.Provider>
    );
};

export {ReducerProvider,Context};