const Simson = ({simson: {name, img}}) => {

    return (
        <div className={'simson-box'}>

            <h2 className={'simson-box__title'}>{name}</h2>

            <img src={img} alt={name} className={'simson-box__img'} style={{height: '200px'}}/>

        </div>
    );
};

export {Simson};