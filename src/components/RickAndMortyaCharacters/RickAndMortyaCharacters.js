import {useEffect, useState} from "react";
import axios from "axios";

import {RickAndMortyaCharacter} from "../RickAndMortyaCharacter/RickAndMortyaCharacter";

const RickAndMortyaCharacters = () => {

    const [charters,setCharters] = useState([])

    useEffect( ()=>{

        const getCharters = async ()=>{

          const {data:{results}} = await axios.get('https://rickandmortyapi.com/api/character');

          setCharters(results);
        };

        getCharters();

    },[]);

    return (
        <div className={'charters'}>

            <h2 style={{textAlign:'center'}} className={'charters__title'}>Rick And Mortya</h2>

            {charters.length && charters.map(charter => <RickAndMortyaCharacter key={charter['id']} charter={charter}/>)}

        </div>
    );
};

export {RickAndMortyaCharacters};