import {axiosServices} from "./axiosServices";
import {urls} from "../constans";

const todosServices = {

    getAllTodos:()=>axiosServices.get(urls.todos)

};

export {todosServices};