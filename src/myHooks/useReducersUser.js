import {useContext} from "react";
import {StateContext} from "../huc";

const useReducersUser = (item)=>item(useContext(StateContext))

export {useReducersUser}