import {urls} from "../constans";
import {axiosServices} from "./axiosServices";


const accessTokenKey = 'access';
const refreshTokenKey = 'refresh';


const authServices = {

    login:async function (data) {
    const response = await axiosServices.post(urls.auth.login, data);
        if (response.status === 200) this.setTokens(response.data);
    return response;
    } ,

    refresh:async function(refresh) {
      const response = await axiosServices.post(urls.auth.refresh, {refresh});
      if (response.status === 200) this.setTokens(response.data);
      return response;
    } ,

    me: () => axiosServices.get(urls.auth.me),

    setTokens: ({access, refresh}) => {
        localStorage.setItem(accessTokenKey,access);
        localStorage.setItem(refreshTokenKey,refresh);
    },
    getAccessTokenKey:()=>localStorage.getItem(accessTokenKey),
    getRefreshTokenKey:()=>localStorage.getItem(refreshTokenKey),
    deleteTokenKey:()=>{
        localStorage.removeItem(accessTokenKey);
        localStorage.removeItem(refreshTokenKey);
    },
    isAuthenticated:()=>!!localStorage.getItem(accessTokenKey)

};

export {authServices};