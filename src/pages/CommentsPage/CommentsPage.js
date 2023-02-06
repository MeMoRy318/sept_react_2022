import {Component} from "react";

import {commentsServices} from "../../services";
import {Comment} from "../../components";


class CommentsPage extends Component{

    constructor(props) {
        super(props);
        this.state = {comments:[]}
    };

    componentDidMount() {
        commentsServices.getAllComments().then(({data:comments}) => this.setState(prev =>({...prev,comments})))
    };


    render() {

        return (
            <div>
                {this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        )
    }
}

export {CommentsPage};