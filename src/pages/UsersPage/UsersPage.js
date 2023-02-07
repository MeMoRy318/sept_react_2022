import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userAction} from "../../redux/slices";
import {User} from "../../components";


const UsersPage = () => {


    const dispatch = useDispatch();
    const {users} = useSelector(state => state.userReducer);


useEffect(()=>{
    dispatch(userAction.getAllusers())
},[])


    return (
        <div>
            {!!users.length && users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {UsersPage};