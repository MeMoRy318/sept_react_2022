import React, {useState} from 'react';
import {ClassCoponents} from "./components/ClassCoponents";

const App = () => {

     const [boolian,setBolian] = useState(true);

    return (
        <div>
            { boolian && <ClassCoponents userName={'Max'}/>}
            <button onClick={()=> setBolian(prev => !prev)}>clear</button>
        </div>
    );
};

export default App;