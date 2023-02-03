import {Component} from "react";

class Post extends Component{

    constructor(props) {

        super(props);

    }


   render() {

        const {post:{id,title,body}} = this.props;

       return(
           <div style={{width:'100%',border:'1px solid red',margin:'20px 0'}}>
               <div>{id}</div>
               <div>{title}</div>
               <div>{body}</div>
           </div>
       )
   }


}
export {Post}