import React from 'react';
import {Mylayout} from "./layout";

import {Route, Routes} from "react-router-dom";
import {CommentsPage, HomePage, NotFoundPage, PostPage, UsersPage} from "./pages";


const App = () => {


    return (
        <Routes>
            <Route path={'/'} element={<Mylayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'posts'} element={<PostPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;