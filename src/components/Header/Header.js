import {NavLink} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {
    return (
        <header className={css.header}>
            <nav className={css.header__navigate}>
                <NavLink to={'users'}>Users</NavLink>
                <NavLink to={'cars'}>Cars</NavLink>
            </nav>
        </header>
    );
};

export {Header};