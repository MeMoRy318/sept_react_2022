import {axiosServices} from "./axiosServices";

import {urls} from "../constans";

const commentsServices = {

    putComments:(data)=>axiosServices.put(urls.comments,data),
    postComments:(data)=>axiosServices.post(urls.comments,data),
    getComments:()=>axiosServices.get(urls.comments)

};

export {commentsServices};

