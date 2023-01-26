import {axiosServices} from "./axiosServices";
import {urls} from "../constans";

const usersServices = {

    createUser:(data)=>axiosServices.post(urls.users,data)

};

export {usersServices};