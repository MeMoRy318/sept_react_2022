import {useForm} from "react-hook-form";

import {actionCat} from "../../reducers";


const CatForm = ({action}) => {

    const {register,reset,handleSubmit} = useForm();

    const sumbmit = async (data) => {
        await action(actionCat.ADD(data));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(sumbmit)}>
            <input type="text" {...register('name')} placeholder={'Cat name'}/>
            <input type="text" {...register('age')} placeholder={'Cat age'}/>
            <button>Save</button>
        </form>
    );
};

export {CatForm};