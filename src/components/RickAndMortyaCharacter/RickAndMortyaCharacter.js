const RickAndMortyaCharacter = ({charter}) => {

    const {id,name,status,species,gender,image} = charter;

    return (
        <div className='charter-box'>
            <h2 className='charter-box__title'>{id} - {name}</h2>
            <h4 className='charter-box__subtitles'>gender - {gender} </h4>
            <h4 className='charter-box__subtitles'>{species} - {status}</h4>
            <img src={image} alt={name} className='charter-box__img'/>
        </div>
    );
};

export {RickAndMortyaCharacter};