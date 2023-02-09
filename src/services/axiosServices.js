import axios from "axios";

import {baseURL} from "../constans";


const axiosServices = axios.create({baseURL});

export {axiosServices};