import {useNavigate} from "react-router-dom";

import css from './NotFoundPage.module.css';


const NotFoundPage = () => {

    const navigate = useNavigate();


    return (
        <div className={css.NotFoundPage}>
            <div className={css.NotFoundPage__title}>404</div>
            <div className={css.NotFoundPage__suptitle}>Oops, the page you're looking for does <br/> not exist.</div>
            <p className={css.NotFoundPage__text}>You may want to head back to the homepage.<br/>If you think something is broken, report a problem.<br /></p>
            <button className={css.NotFoundPage__btn} onClick={()=>navigate('home')}>RETURN HOME</button>
        </div>
    );
};

export {NotFoundPage};