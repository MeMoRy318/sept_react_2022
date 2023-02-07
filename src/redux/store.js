import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./slices";


const rootReducers = combineReducers({
    userReducer:userReducer
});


const setupStore = () => configureStore({
    reducer:rootReducers
});


export {setupStore};