import {useLocation} from "react-router-dom";

import {useContextReducers} from "../../myCastomHook";
import {LoginForm} from "../../components";
import {actionUser} from "../../reducers";


const HomePage = () => {

    const [state,action] = useContextReducers((item)=>item.loginReducers);
    const {state:urlName} = useLocation();

    const out = async () => {
        await action(actionUser.OUT())
    };

    return (
        <div>
            {!state.length ? <LoginForm action={action} urlName={urlName}/> :<button onClick={out}>Go out</button>}
        </div>
    );
};

export {HomePage};