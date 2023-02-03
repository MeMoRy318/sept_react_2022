import {Component} from "react";

import {postsServices} from "../../services";
import {Post} from "../Post/Post";

class Posts extends Component{

    constructor(props) {
        super(props);
        this.state = {posts:[]}
    }

    componentDidMount() {

        postsServices.getAllPosts().then(({data:posts}) => this.setState(prev => ({...prev,posts})))

    }
    componentWillUnmount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {


     }

    render() {

        return(
            <div style={{textAlign:'center'}}>
                {this.state.posts.map( post => <Post key={post.id} post={post}/>)}
            </div>
        )
    }
}

export {Posts}
