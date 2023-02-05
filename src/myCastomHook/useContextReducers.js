import {useContext} from "react";

import {Context} from "../hok";

const useContextReducers = (item) =>item(useContext(Context));

export {useContextReducers};