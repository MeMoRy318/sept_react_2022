import {axiosServices} from "./axiosServices";
import {urls} from "../constans";


const carServices = {
    getAllCars:()=>axiosServices.get(urls.cars),
    createCars:(data)=>axiosServices.post(urls.cars,data),
    updateCar:(id,data)=>axiosServices.put(`${urls.cars}/${id}`,data),
    deleteCar:(id)=>axiosServices.delete(`${urls.cars}/${id}`)
};


export {carServices};