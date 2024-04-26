import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StateType, updatePostText} from "./redux/state"


export const rerenderEmpireTree = (state: StateType) => {
    ReactDOM.render(
        <App updatePostText={updatePostText} state={state} addPost={addPost}/>,
        document.getElementById('root')
    );
}
