const PostsDetalis = ({post}) => {

    const {id,title,body} = post;


    return (
        <div>
            <h4>id - {id}</h4>
            <h4>title - {title}</h4>
            <h4>body - {body} </h4>
        </div>
    );
};

export {PostsDetalis};