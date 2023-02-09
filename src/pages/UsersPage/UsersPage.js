import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {userAction} from "../../redux/slices";
import {User} from "../../components";


const UsersPage = () => {


    const dispatch = useDispatch();
    const {users,isLoading,user} = useSelector(state => state.userReducer);


    useEffect(()=>{
        dispatch(userAction.getUsers())
    },[dispatch])


    return (
        <div style={{maxWidth:'400px' ,margin:'0 auto',textAlign:'center'}}>
            {!!user && <div>{JSON.stringify(user)}</div>}
            {isLoading ? <h1>{isLoading}</h1> : users.map(user => <User dispatch={dispatch} key={user.id}  user={user}/>)}
        </div>
    );
};

export {UsersPage};