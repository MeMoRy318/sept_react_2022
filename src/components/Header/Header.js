import {NavLink} from "react-router-dom";

import css from './Header.module.css';


const Header = () => {


    return (
        <div className={css.header}>
            <div className={css.header__navigation}>
                <NavLink to={'home'}>Home</NavLink>
                <NavLink to={'todos'}>Todos</NavLink>
                <NavLink to={'albums'}>albums</NavLink>
                <NavLink to={'comments'}>comments</NavLink>
            </div>
        </div>
    );
};

export {Header};