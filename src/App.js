import React from 'react';

import './App.css'
import {Comments, Posts} from "./components";

const App = () => {
    return (
        <div style={{display:'flex'}}>
            <Comments/>
            <div style={{height:'auto',width:'3px',background:'black',margin:'0 20px'}}></div>
            <Posts/>
        </div>
    );
};

export default App;