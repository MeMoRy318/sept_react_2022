import React from 'react';
import {Route, Routes} from "react-router-dom";

import {MyLayout} from "./layout";
import {CatsPage, CommentsPage, DogsPage, HomePage, NotFoundPage, PostsPage, RequariPage} from "./pages";


const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<MyLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'cat'} element={<RequariPage><CatsPage/></RequariPage>}/>
                <Route path={'dog'} element={<RequariPage><DogsPage/></RequariPage>}/>
                <Route path={'posts'} element={<RequariPage><PostsPage/></RequariPage>}/>
                <Route path={'comments'} element={<RequariPage><CommentsPage/></RequariPage>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;