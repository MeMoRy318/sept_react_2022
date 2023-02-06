import {actionDog} from "../../reducers";


const Dog = ({dog,action}) => {

    const {id,name,age} = dog;

    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>age:{age}</div>
            <button onClick={()=>action(actionDog.DELETE_BY_ID(id))}>Delete</button>
        </div>
    );
};

export {Dog};