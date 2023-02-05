import {Outlet} from "react-router-dom";

import {Header} from "../components";
import {useContextReducers} from "../myCastomHook/useContextReducers";

const MyLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MyLayout};