import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useNavigate} from "react-router-dom";

import {authServices} from "../../services";
import {loginValidator} from "../../validators";


const LoginForm = () => {


    const {register,handleSubmit,reset,formState:{isValid,errors}} = useForm({mode:"onTouched",resolver:joiResolver(loginValidator)});
    const navigate = useNavigate();


    const submit = async (data) => {
        const response = await authServices.login(data);
        if (response.status === 200)navigate('/cars')
        reset();
    };


    return (
        <form onSubmit={handleSubmit(submit)} style={{padding:'5px'}}>
            <div><input type="text" placeholder={'login'} {...register('username')}/>
                <br/>{errors?.username && <span>{errors?.username?.message}</span>}
            </div>
            <div><input type="text" placeholder={'password'} {...register('password')}/>
                <br/>{errors?.password && <span>{errors?.password?.message}</span>}
            </div>
            <button disabled={!isValid}>Login</button>
        </form>
    );
};

export {LoginForm};