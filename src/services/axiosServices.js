import axios from "axios";
import {createBrowserHistory} from "history";

import {baseURL} from "../constans";
import {authServices} from "./authServices";


const history = createBrowserHistory();
const axiosServices = axios.create({baseURL});


axiosServices.interceptors.request.use((config)=>{
    if (authServices.isAuthenticated()) {
        const access = authServices.getAccessTokenKey()
        config.headers.Authorization = `Bearer ${access}`
    }
    return config;
});


let isRefresh = false;

axiosServices.interceptors.response.use(
    (config)=>{return config;},

    async (error)=>{
    const refresh = authServices.getRefreshTokenKey();
    if (error?.response?.status === 401 && refresh && !isRefresh){
        isRefresh = true;
        try {
            await authServices.refresh(refresh);
        }catch (e) {
            authServices.deleteTokenKey();
            history.replace('/login');
        }
        isRefresh = false;
        return axiosServices(error.config);
    }
    return Promise.reject(error)
    }
)

export {axiosServices,history};