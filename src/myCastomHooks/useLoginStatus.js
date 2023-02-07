import {useContext} from "react";

import {ContextProvider} from "../hok";

const useLoginStatus = ()=> useContext(ContextProvider);

export {useLoginStatus};