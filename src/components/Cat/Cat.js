import {actionCat} from "../../reducers";

const Cat = ({cat,action}) => {

    const {id,name,age} = cat

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>age: {age}</div>
            <button onClick={()=> action(actionCat.DELETE_BY_ID(id))}>Delete</button>
        </div>
    );
};

export {Cat};