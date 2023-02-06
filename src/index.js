import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import './index.css';
import App from './App';
import {ReducerProvider} from "./hok";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ReducerProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ReducerProvider>
);
