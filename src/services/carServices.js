import {apiServices} from "./apiServices";
import {urls} from "../constans";

const carServices = {
    getAllCars:()=>apiServices.get(urls.cars.cars,{params:{page:1}}),
    createCars:(data)=>apiServices.post(urls.cars.cars,data),
    deleteCars:(id)=>apiServices.delete(`${urls.cars.cars}/${id}`),
    updateCars:(id,data)=>apiServices.put(`${urls.cars.cars}/${id}`,data)
};


export {carServices}