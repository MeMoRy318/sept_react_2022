import {useContextReducers} from "../../myCastomHook";
import {Cat, CatForm} from "../../components";


const CatsPage = () => {

    const [state,action] = useContextReducers((item) =>item.catReducers);

    return (
        <div>
            <CatForm action={action}/>
            <hr/>
            {!!state.length && state.map(cat => <Cat key={cat.id} cat={cat} action={action}/>)}
        </div>
    );
};

export {CatsPage};