import axios from "axios";

import {baseURL} from "../constans";


const axiosServicesUser = axios.create({baseURL});


export {axiosServicesUser};