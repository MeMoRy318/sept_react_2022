import {axiosServices} from "./axiosServices";
import {urls} from "../constans";

const postsServices = {

    getAllPosts:()=>axiosServices.get(urls.posts)

};

export {postsServices};