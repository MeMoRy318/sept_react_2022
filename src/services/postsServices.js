import {axiosServices} from "./axiosServices";
import {urls} from "../constans";

const postsServices = {

  getPostsById:(id)=>axiosServices.get(`${urls.posts}/${id}`)

};

export {postsServices};