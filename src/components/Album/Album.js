const Album = ({album}) => {

    const {id,title} = album;

    return (
        <div>
            <h2>{id} - {title}</h2>
        </div>
    );
};

export {Album};