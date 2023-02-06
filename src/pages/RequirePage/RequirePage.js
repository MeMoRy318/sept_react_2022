import {Navigate, useLocation} from "react-router-dom";

import {useContextReducers} from "../../myCastomHook";


const RequirePage = ({children}) => {

    const [state] = useContextReducers((item)=>item.loginReducers);
    const {pathname} = useLocation();

    if (state.length){
        return children

    }else {

        return <Navigate to={'/home'} state={pathname}/>
    }
};

export {RequirePage};