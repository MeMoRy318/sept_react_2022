import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import './index.css';
import App from './App';
import {HistoryPage, RequirePage} from "./hok";
import {Provider} from "react-redux";
import {setupStore} from "./redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setupStore();


root.render(
<Provider store={store}>
    <RequirePage>
        <BrowserRouter>
            <HistoryPage>
                <App/>
            </HistoryPage>
        </BrowserRouter>
    </RequirePage>
</Provider>
);