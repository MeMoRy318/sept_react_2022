import React, {useEffect, useState} from 'react';

import {carsServices} from "../../services";
import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";

const Cars = () => {

    const [cars,setCars] = useState([]);
    const [upCar,setUpCar] = useState(null);
    const [dltcar,setDelCar] = useState(null);


    useEffect(()=>{

         carsServices.getAllCars().then(({data})=>setCars([...data]));

        if (dltcar){

            carsServices.deleteCar(dltcar.id);
            setDelCar(null);
        }

    },[dltcar]);

    return (
        <div>
            <div>
                <CarForm setCars={setCars} upCar={upCar} cars={cars}  setUpCar={setUpCar}/>
            </div>

            <div>
                {!!cars.length && cars.map(car => <Car key={car.id} car={car} setUpCar={setUpCar} setDelCar={setDelCar}/>)}
            </div>
        </div>
    );
};

export {Cars};