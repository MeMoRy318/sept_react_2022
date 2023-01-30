import {useEffect, useState} from "react";

import {todosServices} from "../../services";
import {Todos} from "../../components";


const TodosPage = () => {

    const [todos,setTodos] = useState([]);


    useEffect(()=>{

        todosServices.getAllTodos().then(({data}) => setTodos([...data]));

    },[]);


    return (

        <div style={{paddingTop:'80px'}}>
            {!!todos.length && todos.map(todos => <Todos key={todos.id} todos={todos}/>)}
        </div>

    );
};

export {TodosPage};