import {Route, Routes} from "react-router-dom";

import {MyLayouts} from "./layouts";
import {AlbumsPage, CommentsPage, HomePage, NotFoundPage, PostsDetalisPage, TodosPage} from "./pages";


const App = () => {


    return (
        <Routes>
            <Route path={'/'} element={<MyLayouts/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'todos'} element={<TodosPage/>}/>
                <Route path={'albums'} element={<AlbumsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}>
                    <Route path={':postId'} element={<PostsDetalisPage/>}/>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;