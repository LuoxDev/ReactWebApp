import React from 'react';
import './style/index.css';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from "redux";
import rootReducers from './reducers';
import * as serviceWorker from "./serviceWorker";
import thunk from 'redux-thunk'


import App from './components/App';
import * as ReactDOM from "react-dom";

const middleware = [thunk];
//Store -> Globalized State
const store = createStore(rootReducers, compose(
                applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


ReactDOM.render(
    <Provider store={store}>
                <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();