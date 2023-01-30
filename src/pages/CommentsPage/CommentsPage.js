import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import {commentsServices} from "../../services";
import {Comment} from "../../components";


const CommentsPage = () => {

    const [comments,setComments] = useState([]);


    useEffect(()=>{

        commentsServices.getAllComments().then(({data}) => setComments([...data]));

    },[]);


    return (
        <div style={{paddingTop:'80px'}}>
            <Outlet/>
            {!!comments.length && comments.map(comment => <Comment key={comment['id']} comment={comment}/>)}
        </div>
    );
};

export {CommentsPage};