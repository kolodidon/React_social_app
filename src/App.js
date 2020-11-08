import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {

    return (
        //Wrapper
        <div className='app-wrapper'>

            {/*Header*/}
            <Header/>

            {/*Sidebar*/}
            <Sidebar/>

            {/*Сontent*/}
            <div className="app-wrapper-content">
                <Profile/>
                {/*<Dialogs/>*/}
            </div>

        </div>
    );
}

export default App;
