import React from 'react';
import './App.scss';
import Sidebar from "./components/Sidebar/Sidebar";
import { Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/login/login'
import { connect } from "react-redux";
import { initialize } from '../src/redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import { BrowserRouter } from "react-router-dom";
// import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { withSuspence } from "./hoc/withSuspence";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))

class App extends React.Component {
    componentDidMount() {
        this.props.initialize();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Sidebar />
                <div className="app-wrapper-content">
                    <Route exact path="/" render={() => <ProfileContainer />} />
                    <Route path="/login" render={() => <Login />} />
                    <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                    <Route path="/dialogs" render={withSuspence(DialogsContainer)}/>
                    <Route path="/users" render={() => <UsersContainer />} />
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
    }
}
const actionCreators = { initialize }
const AppContainer =  connect(mapStateToProps, actionCreators)(App);
const MyApp = (props) => {
    return(
        // <HashRouter>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
        //</HashRouter>
    )
}

export default MyApp