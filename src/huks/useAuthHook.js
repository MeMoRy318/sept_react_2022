import {useContext} from "react";
import {AuthContext} from "../hoc/AuthProvider";

const useAuthHook = ()=> useContext(AuthContext);

export {useAuthHook};