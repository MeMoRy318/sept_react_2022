import {userAction} from "../../redux/slices";

const User = ({user,dispatch}) => {


    const {id,name,phone,street,username,website,address_home,city,company,email} = user;


    return (
        <div>
            <h2>id: {id}</h2>
            <div>name: {name}</div>
            <div>user name: {username}</div>
            <div>phone: {phone}</div>
            <div>city: {city}</div>
            <div>street: {street}</div>
            <div>address home:{address_home}</div>
            <div>website: {website}</div>
            <div>email: {email}</div>
            <div>company: {company}</div>
            <button onClick={()=> dispatch(userAction.getUser({id}))}>user info</button>
        </div>
    );
};

export {User};