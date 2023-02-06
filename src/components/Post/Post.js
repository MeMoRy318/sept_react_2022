import {Component} from "react";


class Post extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        const {id,title,body} = this.props.post;

        return (
            <div style={{background:'blue',margin:'3px 0'}}>
                <div>{id}</div>
                <div>{title}</div>
                <div>{body}</div>
            </div>
        )
    }
}
export {Post}