import {useForm} from "react-hook-form";

import {actionDog} from "../../reducers";


const DogForm = ({action}) => {

    const {register,reset,handleSubmit} = useForm();

    const submit = async (data) => {
        await action(actionDog.ADD(data));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" {...register('name')} placeholder={'Dog name'}/>
            <input type="text" {...register('age')} placeholder={'Dog age'}/>
            <button>Save</button>
        </form>
    );
};

export {DogForm};