import {useDispatch} from "react-redux";
import {carAction} from "../../redux/slices";

const Car = ({car}) => {

    const {price,year,brand,id} = car;
    const dispatch = useDispatch();
    return (
        <div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>dispatch(carAction.carDelete({id}))}>Delete</button>
            <button onClick={()=>dispatch(carAction.setValueCar(car))}>Update</button>
        </div>
    );
};

export {Car};