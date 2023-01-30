import css from './HomePage.module.css';
import fon from '../../video/fon.webm'

const HomePage = () => {

    return (
        <div className={css.wrapper}>
            <div className={css.video}>
                <div className={css.video_bg}></div>
                <video autoPlay loop muted className={css.video__item} src={fon} ></video>
            </div>
        </div>
    );
};

export {HomePage};