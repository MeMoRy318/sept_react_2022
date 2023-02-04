import {NavLink, Route, Routes} from "react-router-dom";

import {MyLayout} from "./layout";
import {CarsPage, NotFoundPage, UserPage} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MyLayout/>}>
                <Route index element={<NavLink to={'/'}/>}/>
                <Route path={'users'} element={<UserPage/>}/>
                <Route path={'cars'} element={<CarsPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;