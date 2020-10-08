import React from 'react';
import style from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from './components/Settings/Settings';
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route, withRouter} from "react-router-dom";
// import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {getAuthThunk} from "./redux/authReducer";
import {initializeAppThunk} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import background from "./assets/images/headerBackground05.jpg";
import {withSuspense} from "./hoc/withSuspense";
import User from "./components/Users/User";

const ProfileContainer = React.lazy(() => import ('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import ("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import ("./components/Users/UsersContainer"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeAppThunk();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className={style.appWrapper}>
                <HeaderContainer/>
                <Navbar/>
                <div className={style.appWrapperContent}
                                                     style={{
                                                     backgroundImage: `url("${background}")`,
                                                     backgroundRepeat: 'no-repeat',
                                                     backgroundSize: 'cover'
                                                     }}
                >
                    <Route path="/dialogs"           render={ withSuspense(DialogsContainer)}/>
                    <Route path="/profile/:userId?"  render={ withSuspense(ProfileContainer)}/>
                    <Route path="/users"             render={ withSuspense(UsersContainer)}/>
                    <Route path="/news"              render={ () => <News/>}/>
                    <Route path="/music"             render={ () => <Music/>}/>
                    <Route path="/settings"          render={ () => <Settings/>}/>
                    <Route path="/login"             render={ () => <Login/>}/>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {getAuthThunk, initializeAppThunk})
)(App);