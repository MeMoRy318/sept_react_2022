import {useRef} from "react";
import {useAuthHook} from "../../huks/useAuthHook";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {

    const userName = useRef();
    const {setUser} = useAuthHook();
    const navigate = useNavigate();

    function login() {
        setUser(userName.current.value);
        navigate('/albums')
    }

    return (
        <div style={{marginTop:'80px'}}>
            <input type="text" placeholder={'user name'} ref={userName}/>
            <button onClick={()=> login()}>Register</button>
        </div>
    );
};

export {LoginPage};