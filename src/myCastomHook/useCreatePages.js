import {createPages} from "../utility";

import {useCallback} from "react";


const useCreatePages = (pagesCount,currentPage)=>useCallback(createPages(pagesCount,currentPage),[pagesCount,currentPage]);


export {useCreatePages};