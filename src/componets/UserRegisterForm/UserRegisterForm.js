import {useForm} from "react-hook-form";

const UserRegisterForm = () => {


    const {register,handleSubmit} = useForm();


    const submit =  async (data) => {


    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><input type="text" placeholder={'login'}{...register('username')}/></div>
            <div><input type="text" placeholder={'password'}{...register('password')}/></div>
            <button>Register</button>
        </form>
    );
};

export {UserRegisterForm};