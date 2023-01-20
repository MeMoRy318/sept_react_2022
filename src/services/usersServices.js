import {axiosServices} from "./axiosServices";
import {urls} from "../constans";

const usersServices = {

    getUsers: () => axiosServices.get(urls.getUsers),

    getUserById: (id)=> axiosServices.get(urls.getUsers + id)

};

export {usersServices};