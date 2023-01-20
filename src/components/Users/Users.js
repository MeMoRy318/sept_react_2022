import React, {useEffect, useState} from 'react';

import {usersServices} from "../../services";
import {User, UserDetails} from "../index";
import './Users.css'


const Users = () => {

    const [users,setUsers] = useState([]);
    const [userId,setUserId] = useState(0);

    useEffect(()=>{

       usersServices.getUsers().then(({data}) => setUsers([...data]))

    },[]);

    return (
        <div className={'users'}>
            <div>
                { !!users.length && users.map(user => <User key={user['id']} user={user} setUserId={setUserId} />)}
            </div>

            <div className={'border'}></div>

            <div>
                { !!userId && <UserDetails key={userId} userId={userId}/>}
            </div>
        </div>
    );
};

export {Users};