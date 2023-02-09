import {axiosServicesCars} from "./axiosServicesCars";
import {cars_urls} from "../constans";

const carServices = {
    getAllCars:()=>axiosServicesCars.get(cars_urls.cars),
    createCar:(data)=>axiosServicesCars.post(cars_urls.cars,data),
    updateCar:(id,data)=>axiosServicesCars.put(`${cars_urls.cars}/${id}`,data),
    deleteCarById:(id)=>axiosServicesCars.delete(id)
};


export {carServices};