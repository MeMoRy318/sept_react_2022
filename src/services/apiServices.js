import axios from "axios";
import {createBrowserHistory} from "history";

import {baseURL} from "../constans";
import {authServices} from "./authServices";



const apiServices = axios.create({baseURL});
const history = createBrowserHistory();
let isRefreshing = false;


apiServices.interceptors.request.use((config)=>{
    if (authServices.availabilityTokenKey()){
        const access = authServices.getAccessToken();
        config.headers.Authorization = `Bearer ${access}`
    }
    return config;
});


apiServices.interceptors.response.use((config)=> {return config},
    async (error)=>{
    const refresh = authServices.getRefreshToken();
    if (error.response.status === 401 && refresh && !isRefreshing){
        isRefreshing = true;
        try {
          await authServices.refresh(refresh)
        }catch (e) {
            authServices.deleteTokenKey();
             history.replace('/login')
        }
        isRefreshing = false;
        return apiServices(error.config)
    }
    return Promise.reject(error);
    });


export {apiServices,history};