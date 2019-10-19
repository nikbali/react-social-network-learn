import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import classes from "../App.module.css";
import HeaderContainer from "./header/HeaderContainer";
import ProfileContainer from "./content/profile/ProfileContainer";
import MessagesContainer from "./content/messages/MessagesContainer";
import NewsContainer from "./content/news/NewsContainer";
import FriendsContainer from "./content/friends/FriendsContainer";
import NotFound from "./NotFound";

const Main = (props) => {

    return (
        <div className={classes.grid}>
            <HeaderContainer/>
            <Switch>
                <Route path="/profile" render={() => <ProfileContainer/>}/>
                <Route path="/messages" render={() => <MessagesContainer/>}/>
                <Route path="/news" render={() => <NewsContainer/>}/>
                <Route path="/friends" render={() => <FriendsContainer/>}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    );
};

export default Main;