import {axiosServices} from "./axiosServices";
import {urls} from "../constans";

const commentsServices = {
    getAllComments:()=>axiosServices.get(urls.comments)
}

export {commentsServices};