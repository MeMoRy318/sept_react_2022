import {Dog, DogForm} from "../../components";
import {useContextReducers} from "../../myCastomHook";


const DogsPage = () => {

    const [state,action] = useContextReducers((item)=>item.dogReducers);

    return (
        <div>
            <DogForm action={action}/>
            <hr/>
            {!!state.length && state.map(dog => <Dog key={dog.id} dog={dog} action={action}/>)}
        </div>
    );
};

export {DogsPage};