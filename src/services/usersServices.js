import {axiosServices} from "./axiosServices";
import {urls} from "../constans";

const usersServices = {

    getUsers:()=>axiosServices.get(urls.users),
    postUsers:(usersObj)=>axiosServices.post(urls.users,usersObj)

};

export {usersServices};