import {carAction} from "../../redux/slices";


const Car = ({car,dispatch}) => {

    const {price,year,brand,id} = car;


    return (
        <div style={{margin:'10px 5px'}}>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <div>brand: {brand}</div>
            <button onClick={()=>dispatch(carAction.deleteCar({id}))}>delete</button>
            <button onClick={()=>dispatch(carAction.setCarValue(car))}>update</button>
        </div>
    );
};

export {Car};