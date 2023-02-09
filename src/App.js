import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {CarsPage, HomePage, NotFoundPage, UsersPage} from "./pages";
import {Layout} from "./layout";



const App = () => {


    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'cars'} element={<CarsPage/>}/>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;