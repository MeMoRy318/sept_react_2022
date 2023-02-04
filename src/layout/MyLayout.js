import {Outlet} from "react-router-dom";

import {Header} from "../components";

const MyLayout = () => {

    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MyLayout};