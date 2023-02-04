import {NavLink} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {
    return (
        <header className={css.header}>
            <nav>
                <NavLink to={'users'}>Users</NavLink>
                <NavLink to={'users'}>Cars</NavLink>
            </nav>
        </header>
    );
};

export {Header};