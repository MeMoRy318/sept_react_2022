import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MyLayout} from "./layout";
import {CatsPage, DogsPage, HomePage, NotFoundPage} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MyLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'cat'} element={<CatsPage/>}/>
                <Route path={'dog'} element={<DogsPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;