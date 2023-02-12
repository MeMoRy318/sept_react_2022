import {urls} from "../constans";
import {apiServices} from "./apiServices";


const refreshTokenKey = 'refresh';
const accessTokenKey = 'access';


const authServices = {

    login:async function(data){
      const response = await apiServices.post(urls.auth.auth,data);
        if (response.status === 200) this.setTokenKey(response.data);
        return response;
    },

    refresh:async function(refresh){
       const response = await apiServices.post(urls.auth.refresh,{refresh});
       if (response.status === 200)this.setTokenKey(response.data);
       return response;
    },

    getMe:()=>apiServices.get(urls.auth.me),

    registerUser:(data)=>apiServices.post(urls.users.users,data),

    setTokenKey:({access,refresh})=>{
        localStorage.setItem(accessTokenKey,access)
        localStorage.setItem(refreshTokenKey,refresh)
    },
    getAccessToken:()=>localStorage.getItem(accessTokenKey),
    getRefreshToken:()=>localStorage.getItem(refreshTokenKey),
    deleteTokenKey:()=>{
        localStorage.removeItem(refreshTokenKey)
        localStorage.removeItem(accessTokenKey)
    },
    availabilityTokenKey:()=>!!localStorage.getItem(refreshTokenKey)
};


export {authServices};
