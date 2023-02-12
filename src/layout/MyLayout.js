import {Outlet} from "react-router-dom";

const MyLayout = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export {MyLayout};