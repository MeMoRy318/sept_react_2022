import {NavLink} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {


    return (
        <nav>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'users'}>Users</NavLink>
            <NavLink to={'posts'}>Posts</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
        </nav>
    );
};

export {Header};