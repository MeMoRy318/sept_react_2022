const Todos = ({todos}) => {

    const {id,title} = todos;


    return (

        <div>
            <h2>{id} - {title}</h2>
        </div>

    );
};

export {Todos};