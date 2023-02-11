import {Outlet} from "react-router-dom";
import {Header} from "../componets";

const MyLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MyLayout};