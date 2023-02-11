import css from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <nav className={css.header}>
            <NavLink to={'login'}>Login</NavLink>
            <NavLink to={'register'}>Register</NavLink>
        </nav>
    );
};

export {Header};