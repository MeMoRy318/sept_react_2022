import {NavLink} from "react-router-dom";

import css from './Header.module.css';


const Header = () => {

    return (
        <header className={css.header}>
            <nav className={css.header__nav}>
                <NavLink to={'home'}>home</NavLink>
                <NavLink to={'cat'}>cat</NavLink>
                <NavLink to={'dog'}>dog</NavLink>
                <NavLink to={'posts'}>posts</NavLink>
                <NavLink to={'comments'}>comments</NavLink>
            </nav>
        </header>
    );
};

export {Header};