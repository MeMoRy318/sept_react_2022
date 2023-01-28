import {useNavigate} from "react-router-dom";


const Comment = ({comment}) => {

    const {id,name,body,email} = comment;

    const navigate = useNavigate();


    return (
        <div>
            <hr/>
            <div>name {name}</div>
            <div>body {body}</div>
            <div>email {email}</div>
            <button onClick={()=>navigate(`${id}`)}>Posts detalis</button>
            <hr/>
        </div>
    );
};

export {Comment};