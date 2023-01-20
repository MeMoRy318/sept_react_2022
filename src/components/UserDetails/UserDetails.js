import React, {useEffect, useState} from 'react';

import {usersServices} from "../../services";

const UserDetails = ({userId}) => {

    const [user,setUsers] = useState({})
    const [visibility,offVisibility] = useState('visible')

    useEffect(()=>{

        usersServices.getUserById(userId).then(({data}) => setUsers(data))

    },[userId])

    const {id,name,email} = user;

    return (
        <div style={{visibility:`${visibility}`}}>
            <h2>{id}</h2>
            <div>{name}</div>
            <div>{email}</div>
            <button onClick={()=>offVisibility('hidden')}>clear</button>
        </div>
    );
};

export {UserDetails};