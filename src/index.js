import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import state, {addNewPost, subscriber, textareaChangeFunction} from "./redux/state";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     textareaChangeFunction={textareaChangeFunction}
                     addNewPost={addNewPost}   />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

subscriber(rerenderEntireTree);

rerenderEntireTree();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
