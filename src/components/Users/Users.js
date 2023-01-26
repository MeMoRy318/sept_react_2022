import React, {useState} from 'react';

import {User, UserForm} from "../index";

const Users = () => {

    const [user,setUser] = useState([])

    return (
        <div>
            <div>
            <UserForm setUser={setUser}/>
                {!!user.length && user.map((user,index) => <User key={/*user.id Encountered two children with the same key, `11`*/index} user={user}/>)}
            </div>
        </div>
    );
};

export {Users};