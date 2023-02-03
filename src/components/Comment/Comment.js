import {Component} from "react";

class Comment extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        const {id,email,body} = this.props.comment;

        return(
            <div style={{width:'100%',border:'1px solid red',margin:'20px 0'}}>
                <div>{id}</div>
                <div>{email}</div>
                <div>{body}</div>
            </div>
        )
    }

}

export {Comment};