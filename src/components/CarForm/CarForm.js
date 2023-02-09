import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators";
import {carActions} from "../../redux/slices";
import {useSelector} from "react-redux";
import {useEffect} from "react";

const CarForm = ({dispatch}) => {

    const {valueForm} = useSelector(state => state.carReducer);

    useEffect(()=>{

        if (valueForm){
            setValue('brand',valueForm.brand)
            setValue('price',valueForm.price)
            setValue('year',valueForm.year)
        }

    },[valueForm])

    console.log(valueForm)

    const {reset,register,handleSubmit,setValue,formState:{errors,isValid}} = useForm({mode:"all",resolver:joiResolver(carValidator)});

    const submit = async (data) => {
        if (valueForm){
            await dispatch(carActions.upCar({data:data,id:valueForm.id}))
        }else {

            await dispatch(carActions.carCreate({data}))
        }

        reset()
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <input type="text" {...register('brand')} placeholder={'brand'}/>
                {errors.brand && <span>{errors.brand.message}</span>}
            </div>
            <div>
                <input type="text" {...register('price')} placeholder={'price'}/>
                {errors.price && <span>{errors.price.message}</span>}
            </div>
            <div>
                <input type="text" {...register('year')} placeholder={'year'}/>
                {errors.year && <span>{errors.year.message}</span>}
            </div>
            <button disabled={!isValid}>{valueForm ? 'Update':'Create'}</button>
        </form>
    );
};

export {CarForm};