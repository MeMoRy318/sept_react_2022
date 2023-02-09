import {Car, CarForm} from "../index";
import {useEffect} from "react";
import {carServices} from "../../services";


const Cars = () => {

    useEffect(()=>{

        // carServices.getAllCars().then(({data}) => console.log(data))

    },[])

    return (
        <div>
            <CarForm/>
            <hr/>
            <Car/>
        </div>
    );
};

export {Cars};