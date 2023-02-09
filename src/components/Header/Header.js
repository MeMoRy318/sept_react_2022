import {NavLink} from "react-router-dom";
import css from './Header.module.css';

const Header = () => {


    return (
        <nav>
            <NavLink to={'home'}>Home</NavLink>
            <NavLink to={'cars'}>Cars</NavLink>
            <NavLink to={'users'}>Users</NavLink>
        </nav>
    );
};

export {Header};