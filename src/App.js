import React from 'react';

import classes from "./App.module.css";
import {Switch, Route, Redirect} from "react-router-dom";
import NotFound from "./components/NotFound";
import ProfileContainer from "./components/content/profile/ProfileContainer";
import MessagesContainer from "./components/content/messages/MessagesContainer";
import FriendsContainer from "./components/content/friends/FriendsContainer";
import LoginContainer from "./components/auth/LoginContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import MainContainer from "./components/MainContainer";
import PrivateRoute from "./components/PrivateRoute";


const App = (props) => {

    function PrivateRoute({ children, ...rest }) {
        debugger;
        return (
            <Route
                {...rest}
                render={({ location }) =>
                    props.currentUser.isLogin ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        );
    }

    return (
        <Switch>
            <Route path="/login" render={() => <LoginContainer/>}/>

            <PrivateRoute path="/">
                <MainContainer/>
            </PrivateRoute>

            <Route component={NotFound}/>

        </Switch>
    );


};



export default App;

