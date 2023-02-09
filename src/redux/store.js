import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer, userReducer} from "./slices";


const rootReducer = combineReducers({
    userReducer:userReducer,
    carReducer:carReducer
});


const setupStore = () => configureStore({
    reducer:rootReducer
});


export {setupStore};