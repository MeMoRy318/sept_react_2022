import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {Layout, MyLayout} from "./layout";
import {CarPage, LoginFormPage, RegisterFormPage} from "./pages";


const App = () => {


    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Navigate to={'cars'}/>}/>
                <Route element={<MyLayout/>}>
                    <Route path={'cars'} element={<CarPage/>}/>
                </Route>
                <Route path={'login'} element={<LoginFormPage/>}/>
                <Route path={'register'} element={<RegisterFormPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;