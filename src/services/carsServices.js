import {axiosServices} from "./axiosServices";
import {urls} from "../constans";

const carsServices = {

    getAllCars:()=>axiosServices.get(urls.cars),
    createCar:(data)=>axiosServices.post(urls.cars,data),
    deleteCar:(id)=>axiosServices.delete(`${urls.cars}/${id}`),
    updateCar:(id,data)=> axiosServices.put(`${urls.cars}/${id}`,data)

};

export {carsServices};