import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
    return (
            <div className='app-wrapper'>

                {/*Header*/}
                <Header/>

                {/*Sidebar*/}
                <Sidebar data={props.store.getState().sidebar}/>

                {/*Сontent*/}
                <div className="app-wrapper-content">

                    {/*<Route exact path="/" render={  () => <Profile store={props.store}/> }/>*/}
                    {/*<Route path="/dialogs" render={  () => <Dialogs store={props.store}/> }/>*/}

                    <Route exact path="/" render={  () => <ProfileContainer/> }/>
                    <Route path="/profile" render={  () => <ProfileContainer/> }/>
                    <Route path="/dialogs" render={  () => <Dialogs store={props.store}/> }/>
                    <Route path="/users" render={  () => <UsersContainer/> }/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>

            </div>
    );
}

export default App;
