import {axiosServices} from "./axiosServices";
import {urls} from "../constans";

const albumsServices = {

    getAllAlbums:()=>axiosServices.get(urls.albums)

};

export {albumsServices};