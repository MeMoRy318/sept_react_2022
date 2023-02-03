import {Component} from "react";

import {commentsServices} from "../../services";
import {Comment} from "../Comment/Comment";

class Comments extends Component{

    constructor(props) {

        super(props);

        this.state = {comments:[]};
    }

    componentDidMount() {

        commentsServices.getAllComments().then(({data:comments}) => this.setState(prev=> ({...prev,comments})))

    }

    componentWillUnmount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return true;
    }

    render() {

        return (
            <div>
                {this.state.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
            </div>
        )
    }

}

export {Comments};