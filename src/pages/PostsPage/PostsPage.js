import {Component} from "react";

import {postsServices} from "../../services";
import {Post} from "../../components";


class PostsPage extends Component{

    constructor(props) {
        super(props);
        this.state = {posts:[]}
    }

    componentDidMount() {
    postsServices.getAllPosts().then(({data:posts}) => this.setState(prev=> ({...prev,posts})))
    }

    render() {

        return (
            <div>
                {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        )
    }
}

export {PostsPage};