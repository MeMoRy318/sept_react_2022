import React, {useEffect, useState} from 'react';

import {commentsServices} from "../../services";
import {CommentsDetali} from "../index";

const CommentsDetalis = ({setUpComment}) => {

    const [comments,setComents] = useState([]);

    useEffect(()=>{

        commentsServices.getComments().then(({data}) =>setComents([...data]) )

    },[])

    return (
        <div>
            {!!comments.length && comments.map(value => <CommentsDetali key={value.id} comments={value} setUpComment={setUpComment}/>)}
        </div>
    );
};

export {CommentsDetalis};