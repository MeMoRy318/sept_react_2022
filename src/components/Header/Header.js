import {NavLink} from "react-router-dom";

import css from './Header.module.css';


const Header = () => {
    return (
        <header className={css.header}>
            <nav className={css.header__nav}>
                <NavLink to={'home'}>home</NavLink>
                <NavLink to={'cat'}>cat</NavLink>
                <NavLink to={'dog'}>dog</NavLink>
            </nav>
        </header>
    );
};

export {Header};