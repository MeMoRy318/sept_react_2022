import {user_urls} from "../constans";
import {axiosServicesUser} from "./axiosServicesUser";


const userServices = {
getAllUsers:()=>axiosServicesUser.get(user_urls.users),
detUserById:(id)=>axiosServicesUser.get(`${user_urls.users}/${id}`)
};


export {userServices};