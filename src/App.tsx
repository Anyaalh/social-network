import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StateType, updatePostText} from "./redux/state";
import {Friends} from "./components/Friends/Friends";


type AppType = {
    state: StateType
    addPost: ()=> void
    updatePostText: (newText: string)=> void
}

function App({state, addPost, updatePostText}: AppType) {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar state={state.sidebar}/>
                <div className={"app-wrapper-content"}>
                    <Route path="/profile" render={() => <Profile updatePostText={updatePostText} state={state.profilePage} addPost={addPost}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs state={state.dialogsPage}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/friends" render={() => <Friends/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}


export default App;
