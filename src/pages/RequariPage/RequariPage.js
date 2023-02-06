import {useContextReducers} from "../../myCastomHook";
import {Navigate, useLocation} from "react-router-dom";


const RequariPage = ({children}) => {

    const [state] = useContextReducers((item)=>item.loginReducers);
    const {pathname} = useLocation();

    if (state.length){
        return children

    }else {

        return <Navigate to={'/home'} state={pathname}/>
    }
};

export {RequariPage};