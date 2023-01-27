import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";

import {usersServices} from "../../services";
import {userValidator} from "../../validators";

const UserForm = ({setUser}) => {

    const {register,handleSubmit,reset,formState:{isValid,errors}} = useForm({mode:'all',resolver:joiResolver(userValidator)});


    const submit = async (data) => {

        const {data:data_} = await usersServices.createUser(data);

        setUser(prev => [...prev,data_]);

        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <input type="text" {...register('name')} placeholder={'name'}/>
                {errors.name && <span>{errors.name.message}</span>}
            </div>

            <div>
                <input type="text" {...register('username')} placeholder={'username'}/>
                {errors.username && <span>{errors.username.message}</span>}
            </div>

            <div>
                <input type="text" {...register('email')} placeholder={'email'}/>
                {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div>
                <input type="text" {...register('phone')} placeholder={'phone'}/>
                {errors.phone && <span>{errors.phone.message}</span>}
            </div>
            
            <div>
                <input type="text" {...register('website')} placeholder={'website'}/>
                {errors.website && <span>{errors.website.message}</span>}
            </div>

            <button disabled={!isValid}>Create</button>

        </form>
    );
};

export {UserForm};