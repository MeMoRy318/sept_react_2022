import {Outlet} from "react-router-dom";

import {Header} from "../../components";


const Mylayout = () => {


    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {Mylayout};