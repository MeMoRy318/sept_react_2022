const User = ({user}) => {


    const {id,name,username,phone,website} = user;


    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>user name: {username}</div>
            <div>phone: {phone}</div>
            <div>web site: {website}</div>
        </div>
    );
};

export {User};