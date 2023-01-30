import {useEffect, useState} from "react";

import {albumsServices} from "../../services";
import {Album} from "../../components";


const AlbumsPage = () => {

   const [albums,setAlbums] = useState([]);


   useEffect(()=>{

       albumsServices.getAllAlbums().then(({data})=> setAlbums([...data]));

   },[]);


    return (
        <div style={{paddingTop:'80px'}}>
            {!!albums.length && albums.map(album => <Album key={album['id']} album={album}/>)}
        </div>
    );
};

export {AlbumsPage};