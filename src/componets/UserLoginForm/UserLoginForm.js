import {useForm} from "react-hook-form";
import {useState} from "react";

import {authServices} from "../../services";
import {useNavigate} from "react-router-dom";


const UserLoginForm = () => {


    const {register,handleSubmit} = useForm();
    const [error,setError] = useState(false);
    const navigate = useNavigate();

    const submit = async (data) => {
        try {
            await authServices.login(data);
            navigate('/cars')
        }catch (e) {
            if (e.response.status === 401) setError(e.response.data)
        }
    };



    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><input type="text" placeholder={'login'} {...register('username')}/></div>
                <div><input type="text" placeholder={'password'} {...register('password')}/></div>
                <button>Login</button>
            </form>
            <div>{error && JSON.stringify(error)}</div>
        </div>
    );
};

export {UserLoginForm};