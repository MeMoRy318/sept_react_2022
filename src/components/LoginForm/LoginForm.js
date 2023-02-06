import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {actionUser} from "../../reducers";


const LoginForm = ({action,urlName}) => {

    const {handleSubmit,register,reset} = useForm();
    const navigate = useNavigate();

    const submit = async (data) => {
        await action(actionUser.LOGIN(data));
        !!urlName && navigate(urlName);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" {...register('login')} placeholder={'Login'}/>
            <input type="password" {...register('password')} placeholder={'Password'}/>
            <button>Login</button>
        </form>
    );
};

export {LoginForm};