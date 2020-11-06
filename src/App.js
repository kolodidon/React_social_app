import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";

const App = () => {

    return (
        //Wrapper
        <div className='app-wrapper'>

            {/*Header*/}
            <Header/>

            {/*Sidebar*/}
            <Sidebar/>

            {/*Post*/}
            <Profile/>

        </div>
    );
}

export default App;
