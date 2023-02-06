import React from 'react';
import {Route, Routes} from "react-router-dom";

import {MyLayout} from "./layout";
import {CatsPage, CommentsPage, DogsPage, HomePage, NotFoundPage, PostsPage, RequirePage} from "./pages";


const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<MyLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'cat'} element={<RequirePage><CatsPage/></RequirePage>}/>
                <Route path={'dog'} element={<RequirePage><DogsPage/></RequirePage>}/>
                <Route path={'posts'} element={<RequirePage><PostsPage/></RequirePage>}/>
                <Route path={'comments'} element={<RequirePage><CommentsPage/></RequirePage>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;