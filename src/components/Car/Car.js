import React from 'react';

const Car = ({car,setUpCar,setDelCar}) => {

    const {brand,price,year} = car;

    return (
        <div className='box-car'>

            <h2 className='box-car__title'>{brand}</h2>
            <img className='box-car__img' src="http://owu.linkpc.net/assets/header.jpg" alt={brand} />
            <div className='box-car__text'>Price {price}</div>
            <div className='box-car__text'>Year {year}</div>

            <button className='box-car__btn' onClick={()=>setUpCar({...car})}>Update</button>
            <button className='box-car__btn' onClick={()=>setDelCar({...car})}>Delete</button>

        </div>
    );
};

export {Car};