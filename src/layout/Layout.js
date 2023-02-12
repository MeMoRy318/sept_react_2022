import {Outlet} from "react-router-dom";
import {Header} from "../componets";


const Layout = () => {

    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {Layout};