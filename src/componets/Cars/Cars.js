import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carAction} from "../../redux/slices";
import {Car} from "../index";


const Cars = () => {


    const dispatch = useDispatch();
    const {cars} = useSelector(state => state.carReducer);

    useEffect(()=>{
        dispatch(carAction.getCars())
    },[dispatch])


    return (
        <div>
            {!!cars.length && cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};