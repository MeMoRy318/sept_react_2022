import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux/slices";
import {Car, CarForm} from "../../components";


const CarsPage = () => {


    const dispatch = useDispatch();
     const {cars,isLoading} = useSelector(state => state.carReducer);
    console.log(cars);

    useEffect(()=>{
        dispatch(carActions.getCars())
    },[dispatch])


    return (
        <div>
            <CarForm dispatch={dispatch}/>
            <hr/>
            {isLoading && <h2>Landing ........... </h2>}
            {!!cars.length && cars.map(car => <Car key={car.id} dispatch={dispatch} car={car} />)}
        </div>
    );
};

export {CarsPage};