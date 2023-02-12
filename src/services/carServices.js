import {apiServices} from "./apiServices";
import {urls} from "../constans";

const carServices = {
    getAllCars:(page)=>apiServices.get(urls.cars.cars,{params:{page}}),
    createCars:(data)=>apiServices.post(urls.cars.cars,data),
    deleteCars:(id)=>apiServices.delete(`${urls.cars.cars}/${id}`),
    updateCars:(id,data)=>apiServices.put(`${urls.cars.cars}/${id}`,data)
};


export {carServices}