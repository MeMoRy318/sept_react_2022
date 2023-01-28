import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postsServices} from "../../services";
import {PostsDetalis} from "../../components";


const PostsDetalisPage = () => {

    const {postId} = useParams();
    const [post,setPost] = useState(null);


    useEffect(()=>{

        postsServices.getPostsById(postId).then(({data}) => setPost({...data}));

    },[postId]);



    return (
        <div>
            {!!post && <PostsDetalis post={post}/>}
        </div>
    );
};

export {PostsDetalisPage};