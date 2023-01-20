import React, {useEffect, useState} from 'react';

import {spacexServices} from "../../services";
import {Spacex} from "../Spacex/Spacex";

const Spacexs =  () => {

    const [spacex,setSpacex] = useState([])

    useEffect(()=>{

        spacexServices.getSpacexData().then(({data}) =>setSpacex([...data]))

    },[])

    return (
        <div>
            {
                !!spacex.length && spacex.filter(value => value['launch_year'] !== 2020)
                    .map((value,index) => <Spacex key={index} spacex={value}/>)

            }
        </div>
    );
};

export {Spacexs};