import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import './index.css';
import App from './App';
import {StateProvider} from "./huc";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StateProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StateProvider>
);
