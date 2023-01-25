import React from 'react';

const CommentsDetali = ({comments,setUpComment}) => {

    const {postId,name,email,body} = comments;

    return (
        <div>
            <div>{postId}</div>
            <div>{name}</div>
            <div>{email}</div>
            <div>{body}</div>
            <button onClick={()=>setUpComment({...comments})}>update</button>
        </div>
    );
};

export {CommentsDetali};