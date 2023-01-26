import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators";
import {carsServices} from "../../services";

const CarForm = ({setCars,upCar,cars,setUpCar}) => {

const {register,handleSubmit,reset,setValue,formState:{isValid,errors}} = useForm({mode:'all',resolver:joiResolver(carValidator)});

useEffect(()=>{

    if (upCar){
        setValue('brand',upCar.brand)
        setValue('price',upCar.price)
        setValue('year',upCar.year)
    }

},[upCar])

    const submit = async (objData) =>{
    if (upCar){

       const {data} = await carsServices.updateCar(upCar.id,objData);

       const index = cars.findIndex(value => value.id === upCar.id);
       const arrCars = cars;
        cars.splice(index,1, data);
        setCars([...arrCars]);
        setUpCar(null);


    }else {

        const {data} = await carsServices.createCar(objData);

        setCars(prev=> [...prev,data]);

    }

        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>

            <div>
                <input type="text" {...register('brand')} placeholder={'brand'}/>
                <br/>
                {errors.brand && <span>{errors.brand.message}</span>}
            </div>

            <div>
                <input type="text" {...register('price')} placeholder={'price'}/>
                <br/>
                {errors.price && <span>{errors.price.message}</span>}

            </div>

            <div>
                <input type="text" {...register('year')} placeholder={'year'}/>
                <br/>
                {errors.year && <span>{errors.year.message}</span>}
            </div>

            <button disabled={!isValid}>{upCar ? 'Update' : 'Create'}</button>

        </form>
    );
};

export {CarForm};