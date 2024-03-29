import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store";
import {Provider} from "react-redux";
import AppContainer from "./AppContainer";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));


serviceWorker.unregister();
