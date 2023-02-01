import {Navigate, Route, Routes} from "react-router-dom";

import {MyLayouts} from "./layouts";
import {AlbumsPage, CommentsPage, HomePage, LoginPage, NotFoundPage, PostsDetalisPage, TodosPage} from "./pages";
import {RequireAuth} from "./huks/RequireAuth";


const App = () => {


    return (
        <Routes>
            <Route path={'/'} element={<MyLayouts/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'todos'} element={<TodosPage/>}/>
                <Route path={'albums'} element={<RequireAuth><AlbumsPage/></RequireAuth>}/>
                <Route path={'comments'} element={<CommentsPage/>}>
                    <Route path={':postId'} element={<PostsDetalisPage/>}/>
                </Route>
                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;