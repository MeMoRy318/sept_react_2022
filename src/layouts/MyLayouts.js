import {Outlet} from "react-router-dom";

import {Header} from "../components";

const MyLayouts = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MyLayouts};