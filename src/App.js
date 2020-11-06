import React from 'react';
import './App.scss';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";

const App = () => {

    return (
        //Wrapper
        <div className='app-wrapper'>

            {/*Header*/}
            <Header/>

            {/*Sidebar*/}
            <Sidebar/>

            {/*Profile*/}
            <Profile/>

        </div>
    );
}

export default App;
