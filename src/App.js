import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {

    return (

            <div className='app-wrapper'>

                {/*Header*/}
                <Header/>

                {/*Sidebar*/}
                <Sidebar data={props.state.sidebar}/>

                {/*Сontent*/}
                <div className="app-wrapper-content">
                    <Route exact path="/" render={  () => <Profile data={props.state.profilePage} addPost={props.addPost} catchPostText={props.catchPostText}/> }/>
                    <Route path="/dialogs" render={  () => <Dialogs data={props.state.messagesPage} /> }/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>

            </div>
    );
}

export default App;
