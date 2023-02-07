import {urls} from "../constans";
import {axiosServices} from "./axiosServices";

const usersServices = {
    getAllUsers:()=>axiosServices.get(urls.users)
};

export {usersServices};