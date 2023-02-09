import {carActions} from "../../redux/slices";

const Car = ({dispatch,car}) => {

    const {brand,price,year,id} = car;


    return (
        <div>
            <h2>id: {id}</h2>
            <div>brand: {brand}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
            <button>delete</button>
            <button onClick={()=>dispatch(carActions.setUpCar(car))}>Update</button>
        </div>
    );
};

export {Car};