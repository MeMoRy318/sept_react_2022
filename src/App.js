import {Route, Routes} from "react-router-dom";
import {MyLayouts} from "./layouts";

const App = () => {

    return (

        <Routes>
            <Route path={'/'} element={<MyLayouts/>}>

            </Route>
        </Routes>

    );
};

export default App;