import {axiosServices} from "./axiosServices";
import {urls} from "../constans";

const spacexServices = {

    getSpacexData: ()=>axiosServices.get(urls.getSpacexData)

};

export {spacexServices};