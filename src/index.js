import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/Store";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>
        , document.getElementById('root'));
};

//отрисовка при старте приложения
rerenderEntireTree(store.getState());

//отдаем в стор ссылку на метод, осуществляющий перерисовку DOM - дерева
store.subscribeForRerender(rerenderEntireTree);

serviceWorker.unregister();
