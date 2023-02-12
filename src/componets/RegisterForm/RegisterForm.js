import {useState} from "react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {joiResolver} from "@hookform/resolvers/joi";

import {authServices} from "../../services";
import {registerValidator} from "../../validators/registerValidator";


const RegisterForm = () => {

    const {reset,register,handleSubmit,formState:{isValid,errors}} = useForm({mode:"onChange",resolver:joiResolver(registerValidator)});
    const [error,setError] = useState(false)
    const navigate = useNavigate();


    const submit = async (data) => {
        try {
           await authServices.registerUser(data);
           navigate('/login')
        }catch (e) {
            const [username] = e?.response?.data?.username
            setError(username)
        }
        reset();
    };


    return (
        <div>
            <div>{error && error}</div>
            <form onSubmit={handleSubmit(submit)}>
                <div><input type="text" placeholder={'Login'} {...register('username')}/>
                    <br/> {!!errors?.username && <span>{errors?.username?.message}</span>}
                </div>
                <div><input type="text" placeholder={'password'} {...register('password')}/>
                    <br/>{!!errors?.password && <span>{errors?.password?.message}</span>}
                </div>
                <button disabled={!isValid}>Register</button>
            </form>
        </div>
    );
};

export {RegisterForm};