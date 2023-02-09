import {useEffect} from "react";
import {useLocation} from "react-router-dom";


const HistoryPage = ({children}) => {


    const {pathname} = useLocation();


    useEffect(()=>{

        const history_url = JSON.parse(localStorage.getItem('history-url'));

        history_url ?
            localStorage.setItem('history-url',JSON.stringify([...history_url,pathname])) :
            localStorage.setItem('history-url',JSON.stringify([pathname]));

    },[pathname])


    return (
        <div>
            {children}
        </div>
    );
};

export {HistoryPage};