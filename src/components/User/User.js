
const User = ({user}) => {

    const {id,name,phone,username,website,email} = user;

    return (
        <div>
            <h2>user id - {id}</h2>
            <div> user name - {name}</div>
            <div>phone - {phone}</div>
            <div>username - {username}</div>
            <div>website - {website}</div>
            <div>email - {email}</div>
        </div>
    );
};

export {User};