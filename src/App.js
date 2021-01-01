import React from 'react';
import './App.scss';
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/login/login'

const App = (props) => {
    return (
            <div className='app-wrapper'>

                {/*Header*/}
                <HeaderContainer/>

                {/*Sidebar*/}
                <Sidebar data={props.store.getState().sidebar}/>

                {/*Сontent*/}
                <div className="app-wrapper-content">

                    {/*<Route exact path="/" render={  () => <Profile store={props.store}/> }/>*/}
                    {/*<Route path="/dialogs" render={  () => <Dialogs store={props.store}/> }/>*/}

                    <Route exact path="/" render={  () => <ProfileContainer/> }/>
                    <Route path="/login" render={  () => <Login/> }/>
                    <Route path="/profile/:userId?" render={  () => <ProfileContainer/> }/>
                    <Route path="/dialogs" render={  () => <DialogsContainer/> }/>
                    <Route path="/users" render={  () => <UsersContainer/> }/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>

            </div>
    );
}

export default App;
