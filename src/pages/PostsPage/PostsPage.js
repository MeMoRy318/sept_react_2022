import {Component} from "react";
import {postsServices} from "../../services";

class PostsPage extends Component{

    constructor(props) {

        super(props);
        this.state = {posts:[]}

    }

    componentDidMount() {

    postsServices.getAllPosts().then(({data:posts}) => this.state({posts}))

    }

    render() {
        console.log(this.state)
        return (

            <div></div>
        )
    }

}

export {PostsPage};