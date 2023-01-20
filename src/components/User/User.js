import React from 'react';

const User = ({user,setUserId}) => {

    const {id,name} = user;

    return (
        <div>
            <h2>{id}</h2>
            <div>{name}</div>
            <button onClick={()=>setUserId(id)}>send</button>
        </div>
    );
};

export {User};