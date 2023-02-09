import React from 'react';
import {Provider} from "react-redux";
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import {setupStore} from "./redux";
import {ContextProvider, HistoryPage} from "./hok";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setupStore()


root.render(
    <ContextProvider>
        <Provider store={store}>
            <BrowserRouter>
                <HistoryPage>
                    <App/>
                </HistoryPage>
            </BrowserRouter>
        </Provider>
    </ContextProvider>
);
