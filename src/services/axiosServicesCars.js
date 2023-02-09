import axios from "axios";

import {baseURLcars} from "../constans";


const axiosServicesCars = axios.create({baseURL:baseURLcars});


export {axiosServicesCars};