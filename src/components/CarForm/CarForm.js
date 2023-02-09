import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators";
import {carAction} from "../../redux/slices";
import {useEffect} from "react";


const CarForm = ({dispatch,carValue}) => {

    const {reset,register,handleSubmit,setValue,formState:{errors,isValid}} = useForm({mode:"all",resolver:joiResolver(carValidator)});


    useEffect(()=>{
        if (carValue){
            setValue('brand',carValue.brand,{shouldValidate:true})
            setValue('price',carValue.price,{shouldValidate:true})
            setValue('year',carValue.year,{shouldValidate:true})
        }
    },[carValue])


    const submit = async (data) => {
        carValue ?
        await dispatch(carAction.upCar({id:carValue.id,data:data}))
            :
        await dispatch(carAction.carCreate({data}))
        reset()
    };


    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <br/>
                {errors.brand && <span>{errors.brand.message}</span>}
            </div>
            <div>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <br/>
                {errors.price && <span>{errors.price.message}</span>}
            </div>
            <div>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <br/>
                {errors.year && <span>{errors.year.message}</span>}
            </div>
            <button disabled={!isValid}>{isValid ? 'update':'Create'}</button>
        </form>
    );
};

export {CarForm};