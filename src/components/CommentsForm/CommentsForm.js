import React, {useEffect, useState} from 'react';

import {CommentForm} from "../index";
import {commentsServices} from "../../services";

const CommentsForm = ({upComment}) => {

    const [comment,setComment] = useState(null);

    useEffect(()=>{

        const postComents = async ()=>{

            if (comment){

                const {data} = await commentsServices.postComments(comment);

                console.log(data)
            }
        }

        postComents()

    },[comment])

    return (

        <div>
            <CommentForm setComment={setComment} upComment={upComment} />

        </div>

    );
};

export {CommentsForm};