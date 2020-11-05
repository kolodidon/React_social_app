import React from 'react';
import './App.scss';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";

const App = () => {

    return (
        // Обёртка
        <div className='app-wrapper'>

            {/*Шапка*/}
            <Header/>

            {/*Сайдбар*/}
            <Sidebar/>

            {/*Основная часть*/}
            <Profile/>

        </div>
    );
}

export default App;
