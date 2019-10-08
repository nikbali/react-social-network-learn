import React from 'react';

import Navigation from "./components/navbar/Navigation";
import Profile from "./components/content/profile/Profile";
import Header from "./components/header/Header";
import classes from "./App.module.css";
import {Route} from "react-router-dom";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import ProfileContainer from "./components/content/profile/ProfileContainer";
import MessagesContainer from "./components/content/messages/MessagesContainer";
import NewsContainer from "./components/content/news/NewsContainer";
import FriendsContainer from "./components/content/friends/FriendsContainer";

const App = () => {

        return (
            <div className={classes.grid}>
                <Header/>
                <Navigation/>

                <Route path="/profile" render={() => <ProfileContainer />}/>
                <Route path="/messages" render={() => <MessagesContainer />}/>
                <Route path="/news" render={() => <NewsContainer />}/>
                <Route path="/friends" render={() => <FriendsContainer />}/>

                <Route path="/login" render={() => <Login/>}/>

                <Route component={NotFound}/>
            </div>
        );
};

export default App;

