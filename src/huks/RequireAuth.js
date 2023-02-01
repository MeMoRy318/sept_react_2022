import {useAuthHook} from "./useAuthHook";
import {Navigate, useLocation, useNavigate} from "react-router-dom";

const RequireAuth = ({children}) => {

    const {user} = useAuthHook();
     const {pathname} = useLocation();
     const navigate = useNavigate();

   if (!user){
       return <Navigate to={'/login'}/>
   }else {
       return children
   }

};

export {RequireAuth};