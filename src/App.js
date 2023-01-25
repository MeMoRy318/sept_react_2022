import React, {useState} from 'react';
import {CommentsDetalis, CommentsForm} from "./components";

const App = () => {

    const [upComment,setUpComment] = useState(null)

    return (
        <div>
            <CommentsForm upComment={upComment}/>
            <CommentsDetalis setUpComment={setUpComment}/>
        </div>
    );
};

export default App;