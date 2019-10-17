import React from 'react';

import classes from "./App.module.css";
import {Switch, Route, Redirect} from "react-router-dom";
import NotFound from "./components/NotFound";
import ProfileContainer from "./components/content/profile/ProfileContainer";
import MessagesContainer from "./components/content/messages/MessagesContainer";
import NewsContainer from "./components/content/news/NewsContainer";
import FriendsContainer from "./components/content/friends/FriendsContainer";
import LoginContainer from "./components/auth/LoginContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import MainContainer from "./components/MainContainer";


const App = (props) => {


    return (
            <Switch>
                <Route path="/login" render={() => <LoginContainer/>}/>
                <Route path="/" render={() => <MainContainer/>}/>
                <Route component={NotFound}/>
            </Switch>
    );
};

export default App;

