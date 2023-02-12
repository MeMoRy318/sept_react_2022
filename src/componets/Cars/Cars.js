import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../index";
import css from './Cars.module.css';
import {carAction} from "../../redux/slices";
import {useCreatePages} from "../../myCastomHook";


const Cars = () => {

    const dispatch = useDispatch();
    const {cars,pagesCount,currentPage} = useSelector(state => state.carReducer);
    const [query,setQuery] = useSearchParams({page:'1'});
    const pages = useCreatePages(pagesCount,currentPage);

    useEffect(()=>{
        dispatch(carAction.getCars({page:query.get('page')}))
    },[dispatch,query])


    return (
        <div className={css.pagination}>
            <div className={css.pagination_box}>
                <button disabled={+query.get('page') === 1} onClick={()=>setQuery(query =>({page:+query.get('page')-1}) )}>prev</button>
                {pages.map(value =>
                    <span key={value} className={ value===currentPage ? css.active : 'default'} onClick={()=>setQuery(prev => ({page:value+''}))}>
                    {value}
                </span>)}
                <button disabled={+query.get('page') === pagesCount} onClick={()=>setQuery(query =>({page:+query.get('page')+1}) )}>next</button>
            </div>
            {!!cars.length && cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};