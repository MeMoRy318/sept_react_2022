import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators/carValidator";
import {useDispatch, useSelector} from "react-redux";
import {carAction} from "../../redux/slices";
import {useEffect} from "react";


const CarForm = () => {


    const {reset,register,setValue,handleSubmit,formState:{errors,isValid}} = useForm({mode:"onChange",resolver:joiResolver(carValidator)});

    const dispatch = useDispatch();
    const {setValueCars} = useSelector(state => state.carReducer);
    console.log()
    useEffect(()=>{
        if (setValueCars){
            setValue('price',setValueCars.price,{shouldValidate:true})
            setValue('brand',setValueCars.brand,{shouldValidate:true})
            setValue('year',setValueCars.year,{shouldValidate:true})
        }
    },[setValueCars])


    const submit = async (data) => {
        if (setValueCars){
            dispatch(carAction.carUpdate({id:setValueCars.id,data}))
        }else {
            dispatch(carAction.carCreate({data}))
        }
        reset()
    };


    return (
        <form onSubmit={handleSubmit(submit)} style={{padding:'5px'}}>
            <div><input type="text" placeholder={'brand'} {...register('brand')}/>
                <br/>{!!errors?.brand && <span>{errors?.brand?.message}</span>}
            </div>
            <div><input type="text" placeholder={'price'} {...register('price')}/>
                <br/>{!!errors?.price && <span>{errors?.price?.message}</span>}
            </div>
            <div><input type="text" placeholder={'year'} {...register('year')}/>
                <br/>{!!errors?.year && <span>{errors?.year?.message}</span>}
            </div>
            <button disabled={!isValid}>{!!setValueCars ? 'Update':'Create'}</button>
        </form>
    );
};

export {CarForm};