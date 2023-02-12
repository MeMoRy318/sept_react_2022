import {NavLink} from "react-router-dom";

import css from './Header.module.css'


const Header = () => {

    return (
        <header className={css.header}>
            <nav>
                <NavLink to={'login'}>Login</NavLink>
                <NavLink to={'register'}>register</NavLink>
            </nav>
        </header>
    );
};

export {Header};