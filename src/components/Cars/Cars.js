import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Car, CarForm} from "../index";
import {carAction} from "../../redux/slices";


const Cars = () => {

const dispatch = useDispatch();
const {cars,isLoading,error,carValue} = useSelector(state => state.carReducer);


    useEffect(()=>{
         dispatch(carAction.getCars())
    },[dispatch])


    return (
        <div>
            <CarForm dispatch={dispatch} carValue={carValue}/>
            <hr/>
            {error && <h1>error .........</h1>}
            {isLoading && <h1>Loading .........</h1>}
            {!!cars.length && cars.map(car => <Car key={car.id} car={car} dispatch={dispatch}/>)}
        </div>
    );
};

export {Cars};